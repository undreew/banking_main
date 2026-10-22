'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { isEmpty } from "lodash";
import Cookies from "@/utils/cookies";
import useGetSession from "@/hooks/useGetSession";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [authAccount, setAccount] = useState({})
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthResolved, setIsAuthResolved] = useState(false);

  const { isPending, getSessionAccount, sessionAccount } = useGetSession();

  const isAuth = useMemo(
    () => (accessToken ? !isEmpty(accessToken) : false),
    [accessToken]
  );

  useEffect(() => {
    setAccessToken(Cookies.session || null);
    setIsAuthResolved(true);
  }, []);

  const setSession = (data) => {
    console.log("setSession", data);
    Cookies.session = data;
    setAccessToken(data)
  }

  const clearSession = () => {
    Cookies.session = "";
    setAccessToken(null)
  }

  useEffect(() => {
    if (!isPending && sessionAccount) {
      setAccount(sessionAccount)
    }
  }, [isPending])

  useEffect(() => {
    if (isAuth && !isEmpty(accessToken)) {
      getSessionAccount();
    }
  }, [accessToken, isAuth])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setSession,
      authAccount,
      accessToken,
      clearSession,
      isAuthResolved
    }}>
      {isPending ? <h1 className="body">Loading...</h1> : children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };