import React from 'react'
import Headphone from '../public/headphones.png'
import Mic from '../public/mic.png'
import Remote from '../public/remote.png'
import Paint from '../public/paint.png'
import Trophy from '../public/trophy.png'
import Image from 'next/image';



const IconBar = () => {
  return (
    <div id="browse" className="mt-4 p-4 md:p-3">
      <div className="border-t border-gray-800">
        <h2 className="tx-color mt-4 text-3xl font-bold">Browse</h2>
      </div>
      
      <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 py-8">
         
        <div className="flex justify-between px-4  items-center w-full h-[36px] bg-purple-500 rounded-xl cursor-pointer hover:scale-[0.8] transition ease-in duration-300">
          <p className="text-xl font-bold">Games</p>
          <div  className="w-[30px] h-[30px]">
            <Image src={Remote} />
          </div>
        </div>
       <div className="flex justify-between px-4  items-center w-full h-[36px] bg-purple-500 rounded-xl cursor-pointer hover:scale-[0.8] transition ease-in duration-300">
          <p className="text-xl font-bold">Music</p>
          <div  className="w-[30px] h-[30px]">
            <Image src={Headphone} />
          </div>
        </div>
        <div className="flex justify-between px-4  items-center w-full h-[36px] bg-purple-500 rounded-xl cursor-pointer hover:scale-[0.8] transition ease-in duration-300">
          <p className="text-xl font-bold">Creative</p>
          <div  className="w-[30px] h-[30px]">
            <Image src={Paint} />
          </div>
        </div>
        <div className="flex justify-between px-4  items-center w-full h-[36px] bg-purple-500 rounded-xl cursor-pointer hover:scale-[0.8] transition ease-in duration-300">
          <p className="text-xl font-bold">IRN</p>
          <div  className="w-[30px] h-[30px]">
            <Image src={Mic} />
          </div>
        </div>
        <div className="flex justify-between  items-center w-full h-[36px] bg-purple-500 rounded-xl cursor-pointer px-4 hover:scale-[0.8] transition ease-in duration-300">
          <p className="text-xl font-bold">Esport</p>
          <div  className="w-[30px] h-[30px]">
            <Image src={Trophy} />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default IconBar