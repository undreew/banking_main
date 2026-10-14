import React from 'react';

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import BnkButton from "@/components/Button/BnkButton";

const BnkSidebarGroupAction = () => {

    const handleTransaction = () => {
        console.log("Moving money...");
    }

    return (
        <div className="mb-3">
            <BnkButton size="lg" className="w-full" IconLeft={PlusIcon} onClick={handleTransaction}>
                Move money
            </BnkButton>
        </div>
    );
};

export default BnkSidebarGroupAction;