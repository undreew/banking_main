'use client'
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
    const router = useRouter();
    const pathname = usePathname();

    const formSchema = z.object({
        firstName: z
            .string()
            .min(1, "First Name is required")
            .max(255, "First Name must be at most 255 characters"),
        lastName: z
            .string()
            .min(1, "Last Name is required")
            .max(255, "Last Name must be at most 255 characters"),
        email: z
            .email("Email is required")
            .min(5, "Email must be at least 5 characters.")
            .max(32, "Email must be at most 32 characters."),
        password: z
            .string("Password is required")
            .min(5, "Password must be at least 5 characters.")
            .max(100, "Password must be at most 100 characters.")
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    });

    const { mutate, isPending: isLoading, isError, error } = useMutation({
        mutationFn: authService.register,
        onSuccess: () => {
            router.push("/login");
            form.reset();
        }
    });

    const onSubmit = (payload) => mutate(payload);

    useEffect(() => {
        form.reset();
    }, [pathname])

    return { form, onSubmit, isLoading, error, isError };
};

export default useRegister;