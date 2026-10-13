import React from 'react';
import { Banknote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { APP_API_VERSION_TEXT, APP_NAME } from "@/constants/config";

const BnkLogo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                {/*TODO: update with asset*/}
                <Banknote/>
                <span className="font-heading text-foreground text-[1.5rem] font-bold text-center">{APP_NAME}</span>
            </div>
            <Badge className="font-sans text-[0.785rem] text-muted" variant="outline">{APP_API_VERSION_TEXT}</Badge>
        </div>
    );
};

export default BnkLogo;