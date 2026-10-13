import React from 'react';

import { Badge } from "@/components/ui/badge";
import { LockIcon, Snowflake } from "lucide-react";
import { ACCOUNT_LABEL, ACCOUNT_STATUS } from "@/constants/account"

const STATUS_ICONS = {
    [ACCOUNT_STATUS.CLOSED]: <LockIcon/>,
    [ACCOUNT_STATUS.FROZEN]: <Snowflake/>
}

const BnkAccountStatusBadge = (props) => {
    const { status } = props
    return (
        <Badge variant={status} className="font-sans font-bold text-[0.825rem] p-3">
            {STATUS_ICONS[status]}
            {ACCOUNT_LABEL[status]}
        </Badge>
    );
};

export default BnkAccountStatusBadge;