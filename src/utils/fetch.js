import ky, { isNetworkError } from "ky";

import Cookies from "@/utils/cookies";
import { APP_API_BASE_URL } from "@/config/AppConfig";

const TIMEOUT = 50000;

const DEFAULT_ERROR = {
  status: 500,
  fieldErrors: {},
  redirect: false,
  code: 'internal',
  detail: 'Unable to reach the server. Check your connection and try again.'
};

const fetcher = ky.create({
  prefix: APP_API_BASE_URL,
  timeout: TIMEOUT,
  // Required so the browser actually sends the httpOnly refresh cookie.
  credentials: "include",
  headers: {
    'Content-Type': 'application/json'
  },
  hooks: {
    beforeRequest: [
      ({ request }) => {
        // set headers
        request.headers.set('Authorization', `Bearer ${Cookies.session}`);
      }
    ],
    afterResponse: [
      async ({ response }) => {
        if (!response.ok) return response;

        const data = await response.clone().json().catch(() => null); // null for 204/non-JSON

        response.successResponse = { data, status: response.status };
        return response;
      }
    ],
    beforeError: [
      ({ error }) => {
        const data = error?.data;

        if (isNetworkError(error)) {
          console.log("Network error", error);
          error.errorReponse = DEFAULT_ERROR;
        }

        if (data && typeof data === "object") {
          const { detail, fieldErrors, status, title: code, redirect } = data;

          error.errorReponse = {
            code: code,
            status,
            detail,
            redirect,
            fieldErrors
          };
        }

        return error;
      }
    ]
  }
});

const fetch = async (method, url, payload) => {
  return await fetcher[method.toLowerCase()](url, { json: payload });
};

export default fetch;