import { useState } from "react";
import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

const usePostLogout = (callback) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLogoutModal = () => setIsModalOpen(!isModalOpen);

  const { isPending, mutate } = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      callback();
    }
  });

  const onLogout = () => mutate();

  return {
    onLogout,
    isModalOpen,
    toggleLogoutModal,
    isLoggingOut: isPending
  };
};

export default usePostLogout;