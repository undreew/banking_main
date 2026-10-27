"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { SidebarFooter } from "@/components/ui/sidebar";
import { useAuth } from "@/providers/AuthProvider";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";

const initialsOf = (user) => {
  if (!user) return "?";

  return (
    [user.firstName, user.lastName]
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "?"
  );
};

const BnkSidebarFooter = () => {
  const { user, logout, isLoggingOut } = useAuth();
  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  return (
    <SidebarFooter className={"pb-5 px-5"}>
      <BnkCalloutWithAction
        alt={initialsOf(user)}
        title={fullName}
        description={user?.role ? `ROLE_${user.role}` : ""}
        actionProps={{
          Icon: LogOut,
          onClick: () => {
            if (!isLoggingOut) logout();
          }
        }}
      />
    </SidebarFooter>
  );
};

export default BnkSidebarFooter;