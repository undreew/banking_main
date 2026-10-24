'use client'

import React from 'react';

import withLayout from "@/components/Layout/withLayout";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};

Layout.access = "private";

export default withLayout(Layout);
