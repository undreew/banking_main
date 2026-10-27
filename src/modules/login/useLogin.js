"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import authService from "@/services/authService";
import { SESSION_QUERY_KEY } from "@/hooks/useSession";

const SAFE_NEXT = /^\/(?!\/)[\w\-/]*$/; // same-origin paths only, never protocol-relative

const useLogin = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryClient = useQueryClient();

    const formSchema = z.object({
        email: z
          .email("Email is required")
          .min(5, "Email must be at least 5 characters.")
          .max(32, "Email must be at most 32 characters."),
        password: z
          .string("Password is required")
          .min(5, "Password must be at least 5 characters.")
          .max(100, "Password must be at most 100 characters."),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { mutate, isPending: isLoading, isError, error } = useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            // The response body is the SessionResponse; the tokens arrived as HttpOnly cookies.
            queryClient.setQueryData(SESSION_QUERY_KEY, data.successResponse.data);

            const next = searchParams.get("next");
            router.push(next && SAFE_NEXT.test(next) ? next : "/home");

            form.reset();
        },
    });

    const onSubmit = (payload) => mutate(payload);

    useEffect(() => {
        form.reset();
    }, [pathname, form]);

    return { form, onSubmit, isLoading, error, isError };
};

export default useLogin;