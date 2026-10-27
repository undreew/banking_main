import { useQuery } from "@tanstack/react-query";
import authService from "@/services/authService";

export const SESSION_QUERY_KEY = ["session"];

/**
 * The single source of truth for "who am I and how long is my session good for".
 * Backed by GET /auth/session. A 401 means "not logged in" and resolves to null rather than
 * throwing, so consumers can branch on data instead of on errors.
 */
const useSession = () => {
  return useQuery({
    queryKey: SESSION_QUERY_KEY,
    queryFn: async () => {
      try {
        const response = await authService.session();
        return response.successResponse?.data ?? null;
      } catch (error) {
        if (error?.response?.status === 401) return null;
        throw error;
      }
    },
    staleTime: 60 * 1000,
    refetchOnWindowFocus: true,
    retry: false,
  });
};

export default useSession;