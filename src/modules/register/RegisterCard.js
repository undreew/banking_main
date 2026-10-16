'use client'

import React from 'react';

import BnkCard from "@/components/Card/BnkCard";
import useRegister from "@/modules/register/useRegister";
import RegisterForm from "@/modules/register/RegisterForm";

const RegisterCard = () => {
    const registerProps = useRegister();

    return (
        <BnkCard
            title="Create your account"
            className="w-125 px-2 py-8"
            description="It takes a minute. You can open an account right after."
        >
            <RegisterForm {...registerProps} />
        </BnkCard>

    );
};

export default RegisterCard;