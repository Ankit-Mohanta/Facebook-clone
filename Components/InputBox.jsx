import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon,VideoCameraIcon } from '@heroicons/react/solid';

const InputBox = () => {
    const { data: session } = useSession();

    const sendPost = (e) =>{
        e.preventDefault();

    }
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-100 font-medium mt-6'>
        <div className='flex items-center space-x-4 p-4'>
            <Image
            className='rounded-full'
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            />
            <form className='flex flex-1'>
                <input type="text" 
                className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                placeholder={`what's in your min ${session.user.name}?`} 
                />
                <button hidden onClick={sendPost} type="submit">Submit</button>
            </form>
        </div>
        <div className='flex justify-evenly p-3 border-l'>
            <div className="inputicon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className='text-xs sm:text-sm xl:text-base text-gray-500'>Live video</p>
            </div>
            <div className="inputicon">
                <CameraIcon className="h-7 text-green-400" />
                <p className='text-xs sm:text-sm xl:text-base text-gray-500'>Photo/Video</p>
            </div>
            <div className="inputicon">
                <EmojiHappyIcon className="h-7 text-yellow-300" />
                <p className='text-xs sm:text-sm xl:text-base text-gray-500'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox