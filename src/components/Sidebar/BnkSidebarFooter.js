'use client';

import React from 'react';
import { join, map, truncate } from "lodash";
import { LogOut } from "lucide-react";

import { useAuth } from "@/providers/AuthProvider";
import { useLogout } from "@/providers/LogoutProvider";
import { SidebarFooter } from "@/components/ui/sidebar";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";

const BnkSidebarFooter = () => {
  const { authAccount } = useAuth();
  const { toggleLogoutModal } = useLogout();

  const { firstName, lastName, role } = authAccount || {};

  const user = [firstName, lastName] || [];

  const alt = map(user, (name) => name?.toString().charAt(0).toUpperCase()).join("");
  const title = join(user, " ");

  return (
    <SidebarFooter className={'pb-5 px-5'}>
      <BnkCalloutWithAction
        alt={alt}
        description={role}
        /*TODO: {update handling of long names}*/
        title={truncate(title, { length: 13 })}
        actionProps={{ Icon: LogOut, onClick: toggleLogoutModal }}
      />
    </SidebarFooter>
    );
};

export default BnkSidebarFooter;