import React from 'react';

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { APP_API_VERSION_TEXT, APP_NAME } from "@/config/AppConfig";

const BnkLogo = ({ as = "link" }) => {

    const logo = (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <Image
                    width={35}
                    height={35}
                    src="/banking-logo.svg"
                    alt="Picture of the author"
                />
                <span className="font-heading text-[1.5rem] font-bold text-center">{APP_NAME}</span>
            </div>
            <Badge className="font-sans text-[0.785rem] text-muted border-muted" variant="outline">{APP_API_VERSION_TEXT}</Badge>
        </div>
    );

    if (as === "link") {
        return  <Link href="/">{logo}</Link>
    }

    return logo;
};

export default BnkLogo;