import React from 'react';

import { cn } from "cn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const BnkAlert = (props) => {
    const { icon, title, variant, description } = props
    return (
        <Alert variant={variant} className="outline-0 border-0">
            {icon}

            <AlertTitle className="font-bold font-sans">{title}</AlertTitle>

            <AlertDescription className={cn(`text-${variant}-fg`)}>
                {description}
            </AlertDescription>
        </Alert>
    );
};

export default BnkAlert;