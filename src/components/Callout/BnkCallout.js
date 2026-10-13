import React from 'react';

import { cn } from "cn";
import { Item } from "@/components/ui/item";

const BnkCallout = (props) => {
    const { children, className } = props;

    return (
        <Item
            className={cn("callout", className)}>
            {children}
        </Item>
    );
};

export default BnkCallout;