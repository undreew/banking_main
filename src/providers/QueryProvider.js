"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ERROR_SLUGS } from "@/constants/error";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }) => {
  const router = useRouter();

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
        mutationCache: new MutationCache({
          onError: (error) => {
            const errorResponse = error?.errorReponse;

            if (errorResponse && typeof errorResponse === "object") {
              const { code, status, redirect } = errorResponse;

              if (status === 429 && code === ERROR_SLUGS[code] && redirect) {
                router.push("/429");
              }
            }
          },
        }),
        queryCache: new QueryCache({
          onError: (error) => {
            console.error("Query error", error?.errorReponse ?? error);
          },
        }),
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;