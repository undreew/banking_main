import React from 'react';

import { join } from "lodash";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

const BnkInput = (props) => {
    const { name, type = "text", label, placeholder, description, isRequired, isDisabled, Addon} = props;

    const id = join(["id", name, type], "-");

    return (
        <Field data-disabled={isDisabled}>
            <FieldLabel htmlFor="name" className="text-muted">
                {label}
                {isRequired && <span className="text-destructive">*</span>}
            </FieldLabel>

            <InputGroup
                className="py-6 px-2 has-not-disabled:hover:shadow-primary/20 transition-shadow hover:shadow-[0_0_10px_0px] has-disabled:shadow-none has-[[data-slot=input-group-control]:focus-visible]:border-0  has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-primary"
            >
                <InputGroupInput
                    id={id}
                    type={type}
                    required={isRequired}
                    disabled={isDisabled}
                    placeholder={placeholder}
                    aria-invalid={false}

                />
                {Addon}
            </InputGroup>
            <FieldDescription>{description}</FieldDescription>
        </Field>
    );
};

export default BnkInput;