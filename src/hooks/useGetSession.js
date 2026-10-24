import { useState } from "react";
import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

const useGetSession = () => {
  const [data, setData] = useState({});

  const { mutate, isPending } = useMutation({
    mutationFn: authService.currentUser,
    onSuccess: (data) => {
      setData(data.successResponse.data);
    },
    onError: (error) => {
      console.log("Get Session error", error);
    }
  });

  const getSessionAccount = () => mutate();

  return { getSessionAccount, sessionAccount: data, isFetchingSession: isPending };
};

export default useGetSession;