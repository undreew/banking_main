import React from 'react';
import AuthLayout from "@/modules/auth/AuthLayout";

const Layout = ({ children }) => {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
};

export default Layout;