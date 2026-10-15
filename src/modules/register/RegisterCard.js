import React from 'react';

import BnkCard from "@/components/Card/BnkCard";
import RegisterForm from "@/modules/register/RegisterForm";

const RegisterCard = () => {
    return (
        <BnkCard title="Create your account" description="It takes a minute. You can open an account right after." className="w-125 px-2 py-8">
            <RegisterForm />
        </BnkCard>

    );
};

export default RegisterCard;