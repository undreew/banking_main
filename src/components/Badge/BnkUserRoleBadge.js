import React from 'react';

import BnkBadge from "@/components/Badge/BnkBadge";
import { USER_ROLE_LABEL } from "@/constants/user";

const BnkUserRoleBadge = (props) => {
    const { status } = props;
    return (
        <BnkBadge variant={status}>
            {USER_ROLE_LABEL[status]}
        </BnkBadge>
    );
};

export default BnkUserRoleBadge;