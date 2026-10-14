import React from 'react';

import { cn } from "cn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BnkCard = (props) => {
    const { title, children, className, description } = props

    return (
        <Card className={cn("card", className)}>
            {(title || description) && (
                <CardHeader>
                    <CardTitle className="cardTitle">{title}</CardTitle>
                    <CardDescription className="body">{description}</CardDescription>
                </CardHeader>
            )}

            <CardContent className="h-full flex justify-center">
                {children}
            </CardContent>
        </Card>
    );
};

export default BnkCard;