'use client'
import React, { useState } from 'react';

import { Eye, EyeClosed } from "lucide-react";
import BnkInput from "@/components/Input/BnkInput";
import { InputGroupAddon, InputGroupButton } from "@/components/ui/input-group";

const BnkInputPassword = (props) => {
    const {type = "password", ...rest} = props;

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(s => !s);

    return (
        <BnkInput
            {...rest}
            type={isOpen ? "text" : "password"}
            Addon={(
                <InputGroupAddon align="inline-end">
                    <InputGroupButton className="hover:bg-muted/10 cursor-pointer" onClick={handleOpen}>
                        {isOpen ? <Eye/> : <EyeClosed/>}
                    </InputGroupButton>
                </InputGroupAddon>
            )}
        />
    );
};

export default BnkInputPassword;