'use client';

import { LogOutIcon } from "lucide-react";
import React, { createContext, useContext } from 'react';

import usePostLogout from "@/hooks/usePostLogout";
import BnkModal from "@/components/Modal/BnkModal";
import { useAuth } from "@/providers/AuthProvider";
import BnkRadioChoiceCard from "@/components/Radio/BnkRadioChoiceCard";
import { LOGOUT_OPTIONS, LOGOUT_OPTIONS_DATA } from "@/constants/logout";


const LogoutContext = createContext({});

const LogoutProvider = ({ children }) => {
  const { clearSession } = useAuth();
  const { isLoggingOut, onLogout, isModalOpen, toggleLogoutModal } = usePostLogout(clearSession);

  return (
    <LogoutContext.Provider value={{ toggleLogoutModal }}>
      <LogoutModal
        okAction={onLogout}
        isOpen={isModalOpen}
        onToggle={toggleLogoutModal}
      />
      {children}
    </LogoutContext.Provider>
  );
};

const LogoutModal = ({ isOpen, onToggle, okAction }) => {
  return (
    <BnkModal
      isOpen={isOpen}
      title="Log out?"
      onToggle={onToggle}
      cancelProps={{ cancelLabel: "Cancel" }}
      description="Choose what to end. You can sign in again at any time."
      okProps={{ okAction: okAction, okLabel: "Logout", okIcon: LogOutIcon }}
    >
      <BnkRadioChoiceCard
        options={LOGOUT_OPTIONS}
        labels={LOGOUT_OPTIONS_DATA}
        defaultValue={LOGOUT_OPTIONS.this_device}
      />
    </BnkModal>
  );
};

export const useLogout = () => useContext(LogoutContext);

export default LogoutProvider;