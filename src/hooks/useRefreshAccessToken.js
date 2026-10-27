import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { refreshSession } from "@/utils/fetch";
import { SESSION_QUERY_KEY } from "@/hooks/useSession";

/**
 * Renews the HttpOnly cookies through POST /auth/refresh (single-flight, cross-tab locked) and
 * refreshes the cached session so the UI picks up the new expiry instants.
 */
const useRefreshAccessToken = () => {
  const queryClient = useQueryClient();

  const refreshAccessToken = useCallback(async () => {
    const refreshed = await refreshSession();

    if (refreshed) {
      await queryClient.invalidateQueries({ queryKey: SESSION_QUERY_KEY });
    } else {
      queryClient.setQueryData(SESSION_QUERY_KEY, null);
    }

    return refreshed;
  }, [queryClient]);

  return { refreshAccessToken };
};

export default useRefreshAccessToken;