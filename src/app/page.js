import React from 'react';

import BnkSidebar from "@/components/Sidebar/BnkSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


const Page = () => {
    return (
        <SidebarProvider>
            <BnkSidebar />
        </SidebarProvider>
    );
};

export default Page;