import React from 'react';

import BnkLogo from "@/components/Logo/BnkLogo";
import { SidebarHeader } from "@/components/ui/sidebar";

const BnkSidebarHeader = () => {
    return (
        <SidebarHeader className={'pt-5 px-5'}>
            <BnkLogo/>
        </SidebarHeader>
    );
};

export default BnkSidebarHeader;