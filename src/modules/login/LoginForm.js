import Link from "next/link";
import React, { Fragment } from 'react';

import { Info } from "lucide-react";
import BnkAlert from "@/components/Alert/BnkAlert";
import BnkInput from "@/components/Input/BnkInput";
import { FieldGroup } from "@/components/ui/field";
import BnkButton from "@/components/Button/BnkButton";
import BnkInputPassword from "@/components/Input/BnkInputPassword";

const LoginForm = () => {
    return (
        <Fragment>
            <form action="">
                <FieldGroup className="gap-3">
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

                <BnkAlert icon={<Info />} className="mt-5" variant="danger" title="Invalid email or password." description="Check both and try again." />

                <BnkButton className="w-full py-6 px-4 mt-5" size="lg">Sign in</BnkButton>
            </form>

            <p className="bodyMedium text-muted text-center mt-5">
                New here?
                <Link href="/register" className="font-bold text-primary hover:underline ml-1">Create an account</Link>
            </p>
        </Fragment>
    );
};

export default LoginForm;