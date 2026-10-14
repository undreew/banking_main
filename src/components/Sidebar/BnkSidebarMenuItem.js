import React from 'react';
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const BnkSidebarMenuItem = (props) => {
    const {icon, title, url, isActive} = props

    return (
        <SidebarMenuItem>
            <SidebarMenuButton size="lg" className={'cursor-pointer pl-5'} isActive={isActive} render={<a href={url}/>}>
                {icon}
                <span className="font-sans font-medium text-[1rem]">{title}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};

export default BnkSidebarMenuItem;