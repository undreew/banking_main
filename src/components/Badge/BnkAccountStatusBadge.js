import React from 'react';

import BnkBadge from "@/components/Badge/BnkBadge";
import { LockIcon, Snowflake } from "lucide-react";
import { ACCOUNT_LABEL, ACCOUNT_STATUS } from "@/constants/account"

const STATUS_ICONS = {
    [ACCOUNT_STATUS.CLOSED]: <LockIcon/>,
    [ACCOUNT_STATUS.FROZEN]: <Snowflake/>
}

const BnkAccountStatusBadge = (props) => {
    const { status } = props
    return (
        <BnkBadge variant={status}>
            {STATUS_ICONS[status]}
            {ACCOUNT_LABEL[status]}
        </BnkBadge>
    );
};

export default BnkAccountStatusBadge;