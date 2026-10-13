'use client'
import React from 'react';

import { usePathname } from "next/navigation";
import { USER_ROLE } from "@/constants/userRole";
import { generateMenuItems } from "@/constants/sidebar";
import { SidebarMenu, SidebarGroup } from "@/components/ui/sidebar";
import BnkSidebarMenuItem from "@/components/Sidebar/BnkSidebarMenuItem";
import BnkSidebarGroupAction from "@/components/Sidebar/BnkSidebarGroupAction";

const BnkSidebarGroup = () => {
    const pathname = usePathname();

    return (
        <SidebarGroup className={'px-5'}>
            <BnkSidebarGroupAction />
            <SidebarMenu>
                {generateMenuItems(USER_ROLE.USER).map((item, index) => {
                    const isActive = item.url === pathname;
                    return <BnkSidebarMenuItem key={index} isActive={isActive} {...item}/>
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
};

export default BnkSidebarGroup;