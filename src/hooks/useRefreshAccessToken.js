import Cookies from "@/utils/cookies";
import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

let inFlight = null;

const useRefreshAccessToken = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: authService.refresh,
    onSuccess: (data) => {
      Cookies.session = data.successResponse.data.accessToken;
    }
  });

  const refreshAccessToken = () => {
    if (inFlight) return inFlight;

    const run = typeof navigator !== "undefined" && "locks" in navigator  // Cross-tab: only one tab at a time may run doRefresh(), origin-wide.
      ? navigator.locks.request("banking-refresh-token", mutate) : mutate();

    inFlight = run.finally(() => {
      inFlight = null;
    });
  }

  return {
    isPending,
    refreshAccessToken
  };
};

export default useRefreshAccessToken;