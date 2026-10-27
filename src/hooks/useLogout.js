import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import authService from "@/services/authService";

/**
 * Ends the session on the server (revokes it, denylists the access token, clears both cookies),
 * then drops every cached query so no data from the old user survives, and goes to the login page.
 */
const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ everywhere }) =>
      everywhere ? authService.logoutAll() : authService.logout()
  });

  const logout = useCallback(
    async ({ everywhere = false } = {}) => {
      try {
        await mutateAsync({ everywhere });
      } catch {
        // The cookies may already be gone or the token may have expired. Either way, leave.
      }

      router.push("/login");
      queryClient.clear();
    },
    [mutateAsync, queryClient, router]
  );

  return { logout, isPending };
};

export default useLogout;