import React from 'react';

import BnkCard from "@/components/Card/BnkCard";
import LoginForm from "@/modules/login/LoginForm";

const LoginCard = () => {
    return (
        <BnkCard title="Welcome back" description="Sign in to see your accounts and move money." className="w-125 px-2 py-8">
            <LoginForm />
        </BnkCard>
    );
};

export default LoginCard;