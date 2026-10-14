import React from 'react';

import BnkBadge from "@/components/Badge/BnkBadge";
import { USER_STATUS_LABEL } from "@/constants/user";

const BnkUserStatusBadge = (props) => {
    const { status } = props;
    return (
        <BnkBadge variant={status}>
            {USER_STATUS_LABEL[status]}
        </BnkBadge>
    );
};

export default BnkUserStatusBadge;