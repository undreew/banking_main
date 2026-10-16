import React from 'react';

import { cn } from "cn";
import { Button } from "@/components/ui/button";

const BnkButton = (props) => {
    const {
        form,
        type,
        size,
        onClick,
        children,
        className,
        isDisabled,
        LeftIcon = "",
        RightIcon = "",
        variant = "bnkDefault"
    } = props;

    return (
        <Button
            form={form}
            size={size}
            type={type}
            onClick={onClick}
            variant={variant}
            className={cn("button py-6 px-4", className)}
            disabled={isDisabled}
        >
            {!!LeftIcon && <LeftIcon data-icon="inline-left"/>}
            {children}
            {!!RightIcon && <RightIcon data-icon="inline-start"/>}
        </Button>
    );
};

export default BnkButton;