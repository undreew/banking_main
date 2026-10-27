"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useSession, { SESSION_QUERY_KEY } from "@/hooks/useSession";
import useRefreshAccessToken from "@/hooks/useRefreshAccessToken";
import useLogout from "@/hooks/useLogout";
import { SESSION_LOST_EVENT } from "@/utils/fetch";

const AuthContext = createContext(null);

// Refresh this long before the access token expires while the tab is visible.
const REFRESH_LEAD_MS = 60 * 1000;

/**
 * Thin wrapper over the session query. Holds no token and nothing in localStorage. Everything it
 * exposes is derived from GET /auth/session.
 */
function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const { data: session, isPending } = useSession();
  const { refreshAccessToken } = useRefreshAccessToken();
  const { logout, isPending: isLoggingOut } = useLogout();

  const isAuth = Boolean(session?.user);
  const isAuthResolved = !isPending;

  // Proactive refresh shortly before the access token expires. Normal traffic also refreshes on
  // 401, so this only matters for an idle tab.
  useEffect(() => {
    if (!session?.accessExpiresAt) return undefined;

    const delay =
      new Date(session.accessExpiresAt).getTime() - Date.now() - REFRESH_LEAD_MS;

    const timer = setTimeout(() => {
      if (typeof document === "undefined" || document.visibilityState === "visible") {
        refreshAccessToken();
      }
    }, Math.max(delay, 1000));

    return () => clearTimeout(timer);
  }, [session?.accessExpiresAt, refreshAccessToken]);

  // The fetch layer announces a failed refresh; drop the session so guards react immediately.
  useEffect(() => {
    const onLost = () => queryClient.setQueryData(SESSION_QUERY_KEY, null);

    window.addEventListener(SESSION_LOST_EVENT, onLost);
    return () => window.removeEventListener(SESSION_LOST_EVENT, onLost);
  }, [queryClient]);

  const value = useMemo(
    () => ({
      isAuth,
      isAuthResolved,
      session: session ?? null,
      user: session?.user ?? null,
      refreshAccessToken,
      logout,
      isLoggingOut,
    }),
    [isAuth, isAuthResolved, session, refreshAccessToken, logout, isLoggingOut],
  );

  return (
    <AuthContext.Provider value={value}>
      {isPending ? <h1 className="body">Loading...</h1> : children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };