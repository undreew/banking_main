'use client'

import React from 'react';

import BnkCard from "@/components/Card/BnkCard";
import useLogin from "@/modules/login/useLogin";
import LoginForm from "@/modules/login/LoginForm";

const LoginCard = () => {
    const loginProps = useLogin();

    return (
        <BnkCard
            title="Welcome back"
            className="w-125 px-2 py-8"
            description="Sign in to see your accounts and move money."
        >
            <LoginForm {...loginProps} />
        </BnkCard>
    );
};

export default LoginCard;