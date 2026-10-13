import React from 'react';

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const BnkSidebarGroupAction = () => {

    const handleTransaction = () => {
        console.log("Moving money...");
    }

    return (
        <div className="mb-3">
            <Button size="lg" className="w-full cursor-pointer dark:text-black" onClick={handleTransaction}>
                <PlusIcon data-icon="inline-start"/>
                <span>Move money</span>
            </Button>
        </div>
    );
};

export default BnkSidebarGroupAction;