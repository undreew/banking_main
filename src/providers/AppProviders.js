import React from 'react';

import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import LogoutProvider from "@/providers/LogoutProvider";

const AppProviders = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <LogoutProvider>
          {children}
        </LogoutProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default AppProviders;