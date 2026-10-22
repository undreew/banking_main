import React from 'react';

import AuthLeftPanel from "@/modules/auth/AuthLeftPanel";
import AuthRightPanel from "@/modules/auth/AuthRightPanel";

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-9 min-h-screen">
      <AuthLeftPanel/>
      <AuthRightPanel>
        {children}
      </AuthRightPanel>
    </div>
  );
};

export default AuthLayout;