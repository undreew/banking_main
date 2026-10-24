'use client';

import React from 'react';

import { castArray, join } from "lodash";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";

const BnkInput = (props) => {
    const { name, type = "text", label, placeholder, description, Addon } = props;
    const { errors, isInvalid, isRequired, isDisabled, field } = props

    const id = join(["id", name, type], "-");

    return (
        <Field data-disabled={isDisabled} data-invalid={isInvalid}>
            <FieldLabel htmlFor={name}>
                {label}
                {isRequired && <span className="text-destructive">*</span>}
            </FieldLabel>

            <InputGroup
                className="py-6 px-2 has-not-disabled:hover:shadow-primary/20 transition-shadow hover:shadow-[0_0_10px_0px] has-disabled:shadow-none has-[[data-slot=input-group-control]:focus-visible]:border-0  has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-primary"
            >
                <InputGroupInput
                    id={id}
                    {...field}
                    type={type}
                    disabled={isDisabled}
                    aria-invalid={isInvalid}
                    placeholder={placeholder}
                    autoComplete="off"
                />
                {Addon}
            </InputGroup>
            {errors && <FieldError errors={castArray(errors)}/>}
            {description && <FieldDescription>{description}</FieldDescription>}
        </Field>
    );
};

export default BnkInput;