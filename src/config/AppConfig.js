export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const APP_API_VERSION = process.env.NEXT_PUBLIC_APP_API_VERSION;
export const APP_API_VERSION_TEXT = "API v".concat(APP_API_VERSION);
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;

// Browser-facing API prefix. Relative on purpose: Next.js rewrites /api/* to the backend, so the
// browser only ever talks to its own origin and the auth cookies are first-party.
export const APP_API_BASE_URL = process.env.NEXT_PUBLIC_API || "/api/v1";

// Name of the HttpOnly access cookie. Not a secret; the route guard only checks that it exists.
export const APP_ACCESS_COOKIE_NAME =
  process.env.NEXT_PUBLIC_ACCESS_COOKIE_NAME || "access_token";