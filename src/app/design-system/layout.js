import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({children}) => {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    );
};

export default Layout;