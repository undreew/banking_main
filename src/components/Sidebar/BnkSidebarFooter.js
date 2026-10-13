'use client'
import React from 'react';

import { LogOut } from "lucide-react";
import { SidebarFooter } from "@/components/ui/sidebar";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";

const BnkSidebarFooter = () => {
    return (
        <SidebarFooter className={'pb-5 px-5'}>
            <BnkCalloutWithAction
                title={'Jamie Reyes'}
                avatarFallback={'JR'}
                description={'ROLE_USER'}
                actionProps={{onClick: () => console.log("Logging out..."), icon: <LogOut />}}
            />
        </SidebarFooter>
    );
};

export default BnkSidebarFooter;