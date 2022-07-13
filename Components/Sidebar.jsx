import React from 'react'
import SidebarIcon from './SidebarIcon';
import Login from './Login';
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
} from "@heroicons/react/solid"
import { useSession } from 'next-auth/react';

const Sidebar = () => {
    const { data: session } = useSession();
    if (session) {
    return (
     <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarIcon src={session.user.image} title={session.user.name}/>
        <SidebarIcon Icon={UserIcon} title="Friends"/>
        <SidebarIcon Icon={UserGroupIcon} title="Groups"/>
        <SidebarIcon Icon={ShoppingBagIcon} title="Marketplace"/>
        <SidebarIcon Icon={DesktopComputerIcon} title="Watch"/>
        <SidebarIcon Icon={CalendarIcon} title="Events"/>
        <SidebarIcon Icon={ClockIcon} title="Memories"/>
        <SidebarIcon Icon={ChevronDownIcon} title="See more"/>
    </div>
    );
}
    return (
    <>
        {/* <Login /> */}
    </>
    );
};


export default Sidebar