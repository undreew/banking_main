import React from 'react';

import { cn } from "cn";
import { Badge } from "@/components/ui/badge";

const BnkBadge = (props) => {
    const { variant, children, className } = props;
    return (
        <Badge variant={variant} className={cn("badge", className)}>
            {children}
        </Badge>
    );
};

export default BnkBadge;