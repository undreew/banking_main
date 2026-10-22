'use client'

import React from 'react';

import { SidebarProvider } from "@/components/ui/sidebar";
import { withLayout } from "@/components/Layout/withLayout";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};

Layout.access = "private";

export default withLayout(Layout);
