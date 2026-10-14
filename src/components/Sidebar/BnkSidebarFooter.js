'use client'
import React from 'react';

import { LogOut } from "lucide-react";
import { SidebarFooter } from "@/components/ui/sidebar";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";

const BnkSidebarFooter = () => {
    return (
        <SidebarFooter className={'pb-5 px-5'}>
            <BnkCalloutWithAction
                alt={'JR'}
                title={'Jamie Reyes'}
                description={'ROLE_USER'}
                actionProps={{onClick: () => console.log("Logging out..."), Icon: LogOut}}
            />
        </SidebarFooter>
    );
};

export default BnkSidebarFooter;