'use client'

import React from 'react';

import AuthLayout from "@/modules/auth/AuthLayout";
import { withLayout } from "@/components/Layout/withLayout";

const Layout = ({ children }) => {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    );
};

Layout.access = "public";

export default withLayout(Layout);
