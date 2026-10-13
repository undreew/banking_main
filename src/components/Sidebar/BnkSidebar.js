import React from 'react';

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import BnkSidebarGroup from "@/components/Sidebar/BnkSidebarGroup";
import BnkSidebarHeader from "@/components/Sidebar/BnkSidebarHeader";
import BnkSidebarFooter from "@/components/Sidebar/BnkSidebarFooter";

const BnkSidebar = () => {
    return (
        <Sidebar>
            <BnkSidebarHeader/>
            <SidebarContent>
                <BnkSidebarGroup/>
            </SidebarContent>
            <BnkSidebarFooter/>
        </Sidebar>
    );
};

export default BnkSidebar;