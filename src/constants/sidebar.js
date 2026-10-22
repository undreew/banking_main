import { USER_ROLE } from "@/constants/userRole";
import { Home, List, PencilIcon, ShieldCheck, User, Users, Wallet } from "lucide-react";

const MENU_ITEMS = [
    {
        icon: <Home/>,
        title: "Home",
        url: "/home",
        for: [USER_ROLE.USER, USER_ROLE.ADMIN]
    },
    {
        icon: <PencilIcon/>,
        title: "Design System",
        url: "/design-system",
        for: USER_ROLE.USER
    },
    {
        icon: <Wallet/>,
        title: "Accounts",
        url: "/accounts",
        for: [USER_ROLE.USER, USER_ROLE.ADMIN]
    },
    {
        icon: <Users/>,
        title: "Users",
        url: "/users",
        for: USER_ROLE.ADMIN
    },
    {
        icon: <List/>,
        title: "Activity",
        url: "/activity",
        for: USER_ROLE.USER
    },
    {
        icon: <User/>,
        title: "Profile",
        url: "/profile",
        for: USER_ROLE.USER
    },
    {
        icon: <List/>,
        title: "Transactions",
        url: "/transactions",
        for: USER_ROLE.ADMIN
    },
    {
        icon: <ShieldCheck/>,
        title: "Audit log",
        url: "/audit-log",
        for: USER_ROLE.ADMIN
    },
];

const generateMenuItems = (role) => {
    return MENU_ITEMS.filter((item) => {
        if (Array.isArray(item.for)) return item.for.some(role => role === role);
        return item.for === role;
    });
}

export { MENU_ITEMS, generateMenuItems };