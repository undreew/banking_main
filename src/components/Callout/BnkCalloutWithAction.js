'use client'
import React from 'react';

import { cn } from "cn"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

import BnkCallout from "@/components/Callout/BnkCallout"

const BnkCalloutWithAction = (props) => {
    const { src = "", title, description, avatarFallback, actionProps = {}, className } = props;
    const { text = "", icon = null, variant = "icon" } = actionProps;

    return (
        <BnkCallout className={cn(className)}>
            <ItemMedia variant="icon">
                <Avatar>
                    <AvatarImage src={src}/>
                    <AvatarFallback
                        className="bg-sidebar-accent text-accent font-bold">{avatarFallback}</AvatarFallback>
                </Avatar>
            </ItemMedia>

            <ItemContent>
                <ItemTitle className="callout-title font-sans font-semibold">{title}</ItemTitle>
                <ItemDescription className="text-muted">{description}</ItemDescription>
            </ItemContent>

            <ItemActions>
                <Button className={'cursor-pointer text-accent font-semibold'} variant={variant}
                        onClick={actionProps.onClick}>
                    {icon}
                    {text}
                </Button>
            </ItemActions>
        </BnkCallout>
    );
};

export default BnkCalloutWithAction;