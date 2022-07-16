import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({name,message,email,image,postImage,timestamp}) => {
  return (
    <divn className="flex flex-col">
        <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
            <div className='flex items-center space-x-2'>
                <img src={image} alt="" width={40} height={40} className='rounded-full'/>
                <div>
                    <p className='font-medium'>
                        {name}
                    </p>
                    {/* <p> */}
                        {/* {new Date(timestamp.toDateString()).toLocaleString()} */}
                        {/* {timestamp.toUTCString()} */}
                    {/* </p> */}
                </div>
            </div>
            <p className='pt-4'>{message}</p>
        </div>
        {postImage&&(
            <div className='relative h-56 md:h-96 bg-white'>
                <img
                src={postImage}
                objectFit='cover'
                layout='fill'
                />
            </div>
        )}
        {/* Post footer */}
        <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
            <div className='inputicon rounded-none rounded-bl-2xl'>
                <ThumbUpIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className='inputicon rounded-none rounded-bl-2xl'>
                <ChatAltIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
            </div>
            <div className='inputicon rounded-none rounded-bl-2xl'>
                <ShareIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </divn>
  )
}

export default Post