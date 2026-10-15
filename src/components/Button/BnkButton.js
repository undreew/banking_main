import React from 'react';

import { cn } from "cn";
import { Button } from "@/components/ui/button";

const BnkButton = (props) => {
    const {
        size,
        onClick,
        children,
        className,
        LeftIcon = "",
        RightIcon = "",
        variant = "bnkDefault"
    } = props;

    return (
        <Button size={size} variant={variant} onClick={onClick} className={cn("button py-6 px-4", className)}>
            {!!LeftIcon && <LeftIcon data-icon="inline-left"/>}
            {children}
            {!!RightIcon && <RightIcon data-icon="inline-start"/>}
        </Button>
    );
};

export default BnkButton;