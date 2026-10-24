import React from 'react';

import { PlusIcon } from "lucide-react";
import BnkButton from "@/components/Button/BnkButton";

const BnkSidebarGroupAction = () => {

    const handleTransaction = () => {
        console.log("Moving money...");
    }

    return (
        <div className="mb-3">
            <BnkButton size="lg" className="w-full" LeftIcon={PlusIcon} onClick={handleTransaction}>
                Move money
            </BnkButton>
        </div>
    );
};

export default BnkSidebarGroupAction;