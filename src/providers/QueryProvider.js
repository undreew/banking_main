'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { ERROR_SLUGS } from "@/constants/error";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";


const QueryProvider = ({ children }) => {
    const router = useRouter();

    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                status: 60 * 1000,
            }
        },
        mutationCache: new MutationCache({
            onError: (error) => {
                const errorResponse = error?.errorReponse;

                if (errorResponse && typeof errorResponse === "object") {
                    const { /*detail,*/ code, /*fieldErrors,*/ status, redirect} = errorResponse;
                    if (status === 429 && code === ERROR_SLUGS[code] && redirect) {
                        router.push("/429");
                    }
                }
            }
        }),
        queryCache: new QueryCache({
            onError: (error, query) => {
                console.log("Error", error);
            }
        })
    }));

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>

    );
};

export default QueryProvider;