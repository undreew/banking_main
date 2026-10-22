'use client'

import Link from "next/link";
import React, { Fragment } from 'react';
import { Controller } from "react-hook-form";

import { FieldGroup } from "@/components/ui/field";
import BnkInput from "@/components/Input/BnkInput";
import BnkButton from "@/components/Button/BnkButton";
import AuthErrorAlert from "@/modules/auth/AuthErrorAlert";
import BnkInputPassword from "@/components/Input/BnkInputPassword";


const LoginForm = (props) => {
  const { form, onSubmit, isLoading, isError, error } = props;

  const handleSubmit = (data) => onSubmit(data);

  return (
    <Fragment>
      <form id="login-form" onSubmit={form.handleSubmit(handleSubmit)} aria-disabled={isLoading}>
        <FieldGroup className="gap-3">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <BnkInput
                  field={field}
                  errors={fieldState.error}
                  isInvalid={fieldState.invalid}
                  placeholder="your_email@example.com"
                  label="Email"
                  isDisabled={isLoading}
                />
              )
            }}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <BnkInputPassword
                  field={field}
                  errors={fieldState.error}
                  isInvalid={fieldState.invalid}
                  placeholder="********"
                  label="Password"
                  isDisabled={isLoading}
                />
              )
            }}
          />
        </FieldGroup>
      </form>

      <AuthErrorAlert isError={isError} error={error}/>

      <BnkButton isDisabled={isLoading} className="w-full mt-5" type="submit" form="login-form">
        Sign in
      </BnkButton>

      <p className="bodyMedium text-muted text-center mt-5">
        New here?
        <Link href="/register" className="font-bold text-primary hover:underline ml-1">Create an account</Link>
      </p>
    </Fragment>
    );
};

export default LoginForm;