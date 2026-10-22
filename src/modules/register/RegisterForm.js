'use client'

import Link from "next/link";
import React, { Fragment } from 'react';
import { Controller } from "react-hook-form";

import { FieldGroup } from "@/components/ui/field";
import BnkInput from "@/components/Input/BnkInput";
import BnkButton from "@/components/Button/BnkButton";
import AuthErrorAlert from "@/modules/auth/AuthErrorAlert";
import BnkInputPassword from "@/components/Input/BnkInputPassword";

const RegisterForm = (props) => {
  const { form, onSubmit, isLoading, isError, error } = props

  const handleSubmit = (data) => onSubmit(data);

  return (
    <Fragment>
      <form id="register-form" onSubmit={form.handleSubmit(handleSubmit)} aria-disabled={isLoading}>
        <FieldGroup className="grid grid-cols-2 gap-3">
          <Controller
            name="firstName"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <BnkInput
                  field={field}
                  errors={fieldState.error}
                  isInvalid={fieldState.invalid}
                  placeholder="John"
                  label="First Name"
                  isDisabled={isLoading}
                />
              )
            }}
          />

          <Controller
            name="lastName"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <BnkInput
                  field={field}
                  errors={fieldState.error}
                  isInvalid={fieldState.invalid}
                  placeholder="Doe"
                  label="Last Name"
                  isDisabled={isLoading}
                />
              )
            }}
          />
        </FieldGroup>

        <FieldGroup className="gap-3 mt-3">
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

      <BnkButton isDisabled={isLoading} className="w-full mt-5" type="submit" form="register-form">
        Sign up
      </BnkButton>

      <p className="bodyMedium text-muted text-center mt-5">
        Already have an account?
        <Link href="/login" className="font-bold text-primary hover:underline ml-1">Sign in</Link>
      </p>
    </Fragment>
  );
};

export default RegisterForm;