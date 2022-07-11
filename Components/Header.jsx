import Image from 'next/image'
import React from 'react'
import logo from '../img/FacebookPNG4.png'
import { BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon} from "@heroicons/react/solid";
import {FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"; 
import HeaderIcon from './HeaderIcon';

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        {/* Header left */}
        <div className='flex items-center'>
            <Image src={logo} width={40} height={40} layout="fixed" className='rounded-full'/>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-600'/>
                <input type="text" placeholder="Search Facebook" className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'/>
            </div>
        </div>

        {/* Header Center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 sm:space-x-2'>
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>

        {/* Header Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* <Image
            
            /> */}
            <p className='whitespace-nowrap font-semibold pr-3'>Ankit Mohanta</p>
            <ViewGridIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>

    </div>
  )
}

export default Header