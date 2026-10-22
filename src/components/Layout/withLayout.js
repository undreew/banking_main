'use client'

import React, { createContext, useContext } from 'react';

import { useAuth } from "@/providers/AuthProvider";
import Redirect from "@/components/Layout/Redirect";

const WithLayoutContext = createContext({});

const WithLayoutProvider = ({ children }) => {
  return (
    <WithLayoutContext.Provider value={{}}>
      {children}
    </WithLayoutContext.Provider>
  );
};

const withLayout = (Component) => {
  return (props) => {
    const { isAuth, isAuthResolved } = useAuth();

    if (!isAuthResolved) return null;

    let PAGE_ACCESS = {
      public: "public",
      private: "private"
    }

    const access = Component.access ?? "public";

    if (access === PAGE_ACCESS.public && isAuth) {
      return <Redirect url="/home"/>
    }

    if (access === PAGE_ACCESS.private) {
      if (isAuth) {
      } else {
        return <Redirect url="/login"/>;
      }
    }

    return <Component {...props} />;
  }
}

const useLayout = () => useContext(WithLayoutContext);

export { WithLayoutProvider, withLayout, useLayout };