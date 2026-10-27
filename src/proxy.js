import { NextResponse } from "next/server";

/**
 * Runs on the Next.js server for every page request (Next 16 "proxy", formerly middleware).
 *
 * 1. Route guard by cookie PRESENCE. The access cookie is HttpOnly, which hides it from browser
 *    scripts but not from this server code. This is a UX redirect only: it never validates the
 *    token. The API remains the authority and answers 401 for anything invalid.
 * 2. Per-request Content-Security-Policy with a nonce. Next.js applies the nonce to its own
 *    inline scripts when it finds it in the request's CSP header.
 */

const ACCESS_COOKIE = process.env.NEXT_PUBLIC_ACCESS_COOKIE_NAME || "access_token";
const PRIVATE_PREFIXES = [
  "/home",
  "/accounts",
  "/users",
  "/activity",
  "/profile",
  "/transactions",
  "/audit-log"
];
const AUTH_ROUTES = ["/login", "/register"];
const IS_DEV = process.env.NODE_ENV !== "production";

const isPrivate = (pathname) =>
  PRIVATE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));

const buildCsp = (nonce) =>
  [
    "default-src 'self'",
    // 'unsafe-eval' is required by the dev server's hot reload only.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${IS_DEV ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'"
  ].join("; ");

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hasAccessCookie = Boolean(request.cookies.get(ACCESS_COOKIE)?.value);

  if (isPrivate(pathname) && !hasAccessCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (AUTH_ROUTES.includes(pathname) && hasAccessCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/home";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders }
  });

  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  // Everything except the API rewrite target and static assets.
  matcher: ["/((?!api/|_next/static|_next/image|favicon.ico).*)"]
};