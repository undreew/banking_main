import React from 'react';

import QueryProvider from "@/providers/QueryProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { WithLayoutProvider } from "@/components/Layout/withLayout";

const AppProviders = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <WithLayoutProvider>
          {children}
        </WithLayoutProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default AppProviders;