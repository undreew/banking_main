import React from 'react';

const AuthRightPanel = ({ children }) => {
  return (
    <div className="col-span-4">
      <div className="flex items-center justify-center min-h-screen px-20">
        {children}
      </div>
    </div>
  );
};

export default AuthRightPanel;