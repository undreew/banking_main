import ky, { isNetworkError } from "ky";
import { APP_API_BASE_URL } from "@/config/AppConfig";

/**
 * One HTTP client for the whole app.
 *
 * - Credentials are cookies the browser attaches by itself; nothing here reads or stores a token.
 * - Every request carries X-Requested-With. The backend only honours cookie authentication when
 *   that header is present, which is one of its CSRF controls.
 * - A 401 on a normal call triggers one single-flight refresh and one retry. If the refresh fails,
 *   the app is told the session is gone.
 */

const TIMEOUT = 50000;
export const REQUIRED_HEADER = "X-Requested-With";
export const SESSION_LOST_EVENT = "banking:session-lost";

const DEFAULT_ERROR = {
  status: 500,
  fieldErrors: {},
  redirect: false,
  code: "internal",
  detail: "Unable to reach the server. Check your connection and try again.",
};

// Endpoints that must never trigger a refresh-and-retry on 401.
const AUTH_ENDPOINTS = [
  "/auth/login",
  "/auth/register",
  "/auth/refresh",
  "/auth/logout",
  "/auth/logout-all",
];

const isAuthEndpoint = (url) => {
  const path = new URL(url, "http://local").pathname;
  return AUTH_ENDPOINTS.some((endpoint) => path.endsWith(endpoint));
};

const attachSuccess = async ({ response }) => {
  if (!response.ok) return response;

  const data = await response.clone().json().catch(() => null); // null for 204 or non-JSON
  response.successResponse = { data, status: response.status };
  return response;
};

const mapError = ({ error }) => {
  const data = error?.data;

  if (isNetworkError(error)) {
    error.errorReponse = DEFAULT_ERROR;
  }

  if (data && typeof data === "object") {
    const { detail, fieldErrors, status, title: code, redirect } = data;
    error.errorReponse = { code, status, detail, redirect, fieldErrors };
  }

  return error;
};

// Instance without the refresh hook. Used for the refresh call itself so a failing refresh
// cannot recurse into another refresh.
const bare = ky.create({
  // ky 2: `prefix` (not the ky 1 `prefixUrl`) joins the input path onto the API base.
  prefix: APP_API_BASE_URL,
  timeout: TIMEOUT,
  credentials: "include",
  retry: 0,
  hooks: {
    beforeRequest: [({ request }) => request.headers.set(REQUIRED_HEADER, "XMLHttpRequest")],
    afterResponse: [attachSuccess],
    beforeError: [mapError],
  },
});

let refreshInFlight = null;

/**
 * Refreshes the session exactly once even when many requests fail at the same moment, and across
 * tabs when the Web Locks API is available. Resolves to true when the cookies were renewed.
 */
export function refreshSession() {
  if (refreshInFlight) return refreshInFlight;

  const run = async () => {
    try {
      const response = await bare.post("/auth/refresh");
      return response.ok;
    } catch {
      return false;
    }
  };

  const locked =
    typeof navigator !== "undefined" && navigator.locks
      ? navigator.locks.request("banking-session-refresh", run)
      : run();

  refreshInFlight = Promise.resolve(locked).finally(() => {
    refreshInFlight = null;
  });

  return refreshInFlight;
}

const announceSessionLost = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(SESSION_LOST_EVENT));
  }
};

const fetcher = ky.create({
  prefix: APP_API_BASE_URL,
  timeout: TIMEOUT,
  credentials: "include",
  retry: 0,
  hooks: {
    beforeRequest: [({ request }) => request.headers.set(REQUIRED_HEADER, "XMLHttpRequest")],
    afterResponse: [
      async ({ request, options, response }) => {
        if (
          response.status !== 401 ||
          isAuthEndpoint(request.url) ||
          options.context?.retried
        ) {
          return response;
        }

        const refreshed = await refreshSession();

        if (!refreshed) {
          announceSessionLost();
          return response;
        }

        return fetcher(request, {
          ...options,
          context: { ...(options.context || {}), retried: true },
        });
      },
      attachSuccess,
    ],
    beforeError: [mapError],
  },
});

const fetch = async (method, url, payload) => {
  const options = payload === undefined ? {} : { json: payload };
  return await fetcher[method.toLowerCase()](url, options);
};

export default fetch;