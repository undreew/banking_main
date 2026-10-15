import React, { Fragment } from 'react';
import BnkInput from "@/components/Input/BnkInput";
import BnkInputPassword from "@/components/Input/BnkInputPassword";
import { FieldGroup } from "@/components/ui/field";
import BnkButton from "@/components/Button/BnkButton";
import Link from "next/link";

const RegisterForm = () => {
    return (
        <Fragment>
            <form action="">
                <FieldGroup className="grid grid-cols-2 gap-3">
                    <BnkInput
                        name="firstName"
                        label="First Name"
                        placeholder="John"
                    />

                    <BnkInput
                        name="lastName"
                        label="Last Name"
                        placeholder="Doe"
                    />
                </FieldGroup>

                <FieldGroup className="gap-3 mt-3">
                    <BnkInput
                        name="email"
                        label="Email"
                        placeholder="your_email@example.com"
                    />

                    <BnkInputPassword
                        name="password"
                        label="Password"
                        placeholder="*********"
                    />
                </FieldGroup>

                <BnkButton className="w-full mt-5" size="lg">Sign in</BnkButton>
            </form>

            <p className="bodyMedium text-muted text-center mt-5">
                Already have an account?
                <Link href="/login" className="font-bold text-primary hover:underline ml-1">Sign in</Link>
            </p>
        </Fragment>
    );
};

export default RegisterForm;