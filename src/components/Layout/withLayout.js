"use client";

import React, { createContext, useContext } from "react";
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

const PAGE_ACCESS = {
  public: "public",
  private: "private",
};

/**
 * Client-side route guard. The server-side proxy already redirects on cookie presence; this is
 * the in-app fallback that reacts to the session query, for example after a refresh failure.
 */
const withLayout = (Component) => {
  const Guarded = (props) => {
    const { isAuth, isAuthResolved } = useAuth();

    if (!isAuthResolved) return null;

    const access = Component.access ?? PAGE_ACCESS.public;

    if (access === PAGE_ACCESS.public && isAuth) {
      return <Redirect url="/home" />;
    }

    if (access === PAGE_ACCESS.private && !isAuth) {
      return <Redirect url="/login" />;
    }

    return <Component {...props} />;
  };

  Guarded.displayName = `withLayout(${Component.displayName || Component.name || "Component"})`;

  return Guarded;
};

const useLayout = () => useContext(WithLayoutContext);

export { WithLayoutProvider, withLayout, useLayout };