'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Redirect = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(url);
  }, [url, router]);

  return <>Redirecting...</>;
};

export default Redirect;