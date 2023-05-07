import React from 'react';
import { rec_channels, top_channels } from '../data/mock-data'
import { RiMovieLine} from 'react-icons/ri'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'



const SideMenu = () => {
  return (
    <div className="fixed h-full w-14 min-[500px]:w-16 md:w-[15rem] p-2 bg-[#9147ff] rounded-xl mt-4">
     <p className="hidden md:flex uppercase font-bold text-sm pb-4 pt-2 xl:mt-8">Recommended Channels</p>
      <p>
        <RiMovieLine size={15} className="justify-center w-full md:hidden cursor-pointer"/>
      </p>
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div className="flex items-center cursor-pointer">
            <Image src={item.avatar} width='20' height='20' alt={item.username} />
          </div>
          <div className="hidden md:flex justify-between w-full font-bold items-center">
            <div>
             <p>{item.username}</p>
              <p className="text-gray-500">{item.game_name}</p>
            </div>
            <div>
              <p className="flex items-center"><BsDot color='red' size={30} />{item.rank}K</p>
            </div>
            
          </div>
        </div>
      ))}
      <div>
        <p className="hidden  md:flex uppercase font-bold text-sm pb-4 pt-4 md:mt-4 xl:mt-16">Top Channels</p>
      <p>
        <RiMovieLine size={15} className="justify-center w-full md:hidden mt-12 cursor-pointer"/>
      </p>
         {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div className="flex items-center cursor-pointer">
            <Image src={item.avatar} width='20' height='20' alt={item.username} />
          </div>
          <div className="hidden md:flex justify-between w-full font-bold items-center">
            <div>
             <p>{item.username}</p>
              <p className="text-gray-500">{item.game_name}</p>
            </div>
            <div>
              <p className="flex items-center"><BsDot color='red' size={30} />{item.rank}K</p>
            </div>
            
          </div>
        </div>
      ))}
      </div>
    
    </div>
  )
}

export default SideMenu