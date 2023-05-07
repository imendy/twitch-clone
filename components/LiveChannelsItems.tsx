import React from 'react'
import Image from 'next/image';


const LiveChannelsItems = ({ img, profile_img, title, user, game }) => {
  return (
    <div className='p-2 w-full'>
       <Image src={img} alt='/' width='555' height='315' className="hover:scale-125 transition duration-150 cursor-pointer" />
      <div className="flex pt-2">
          <div className="mt-2 pr-2">
          <Image src={profile_img} width='30' height='30' className="rounded-full"/>
        </div>
        <div>
          <p className='text-sm font-bold cursor-pointer'>{title}</p>
          <p className='text-sm text-gray-500 cursor-pointer'>{user}</p>
          <p className='text-sm text-gray-500 cursor-pointer'>{game}</p>
        </div>
      </div>
   </div>
  )
}

export default LiveChannelsItems