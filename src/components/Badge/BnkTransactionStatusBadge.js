import React from 'react';

import BnkBadge from "@/components/Badge/BnkBadge";
import { CheckIcon, Clock, LucideX, RotateCcw } from "lucide-react";
import { TRANSACTION_STATUS, TRANSACTION_LABEL } from "@/constants/transaction";

const STATUS_ICONS = {
    [TRANSACTION_STATUS.COMPLETED]: <CheckIcon/>,
    [TRANSACTION_STATUS.REVERSED]: <RotateCcw/>,
    [TRANSACTION_STATUS.FAILED]: <LucideX/>,
    [TRANSACTION_STATUS.PENDING]: <Clock/>
}

const BnkTransactionStatusBadge = (props) => {
    const { status } = props;
    return (
        <BnkBadge variant={status}>
            {STATUS_ICONS[status]}
            {TRANSACTION_LABEL[status]}
        </BnkBadge>
    );
};

export default BnkTransactionStatusBadge;