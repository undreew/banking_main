'use client'
import React from 'react';

import { cn } from "cn"
import { ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

import BnkCallout from "@/components/Callout/BnkCallout"
import BnkButton from "@/components/Button/BnkButton";
import BnkAvatar from "@/components/Avatar/BnkAvatar";

const BnkCalloutWithAction = (props) => {
    const { alt = "", src = "", title, description, actionProps = {}, className } = props;
    const { text = "", Icon = "", variant = "icon" } = actionProps;

    return (
        <BnkCallout className={cn(className)}>
            <ItemMedia variant="icon">
                <BnkAvatar src={src} alt={alt}/>
            </ItemMedia>

            <ItemContent>
                <ItemTitle className="callout-title font-sans font-semibold">{title}</ItemTitle>
                <ItemDescription className="text-muted">{description}</ItemDescription>
            </ItemContent>

            <ItemActions>
                <BnkButton LeftIcon={Icon} variant={variant} className="cursor-pointer text-accent font-semibold p-0" onClick={props.onClick}>
                    {text}
                </BnkButton>
            </ItemActions>
        </BnkCallout>
    );
};

export default BnkCalloutWithAction;