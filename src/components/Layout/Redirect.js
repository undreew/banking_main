'use client'

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";

const Redirect = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    if (url) router.push(url);
  }, [url, router])

  /* TODO:{Change to full page loading spinner}*/
  return <>Redirecting...</>;
};

export default Redirect;