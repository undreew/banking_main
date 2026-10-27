import React from 'react';

import QueryProvider from "@/providers/QueryProvider";
import LogoutProvider from "@/providers/LogoutProvider";
import { AuthProvider } from "@/providers/AuthProvider";

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