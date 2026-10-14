import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const BnkAvatar = (props) => {
    const { src, alt } = props;
    return (
        <Avatar>
            <AvatarImage src={src}/>
            <AvatarFallback className="bg-sidebar-accent text-accent font-bold">{alt}</AvatarFallback>
        </Avatar>
    );
};

export default BnkAvatar;