'use client';

import React from 'react';

import { cn } from "cn";
import { ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

import BnkButton from "@/components/Button/BnkButton";
import BnkAvatar from "@/components/Avatar/BnkAvatar";
import BnkCallout from "@/components/Callout/BnkCallout";

const BnkCalloutWithAction = (props) => {
  const { alt = "", src = "", title, description, actionProps = {}, className } = props;
  const { text = "", Icon = "", variant = "icon", onClick } = actionProps;

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
          <BnkButton
            LeftIcon={Icon}
            onClick={onClick}
            variant={variant}
            className="cursor-pointer text-accent font-semibold p-0"
          >
            {text}
          </BnkButton>
        </ItemActions>
      </BnkCallout>
    );
};

export default BnkCalloutWithAction;