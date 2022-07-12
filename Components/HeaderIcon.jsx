import React from 'react'

const HeaderIcon = ({Icon,active}) => {
  return (
    <div className='flex items-center active:border-b-2 active:border-blue-500 cursor-pointer md:px-10 md:hover:bg-gray-100 sm:h-14 group'>
        <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx:auto ${active && 'text-blue-500'}`}/>
    </div>
  )
}

export default HeaderIcon