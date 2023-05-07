import React from 'react'
import Image from 'next/image';



const CategoriesItems = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2">
      <Image src={img} width='260' height='350' className="cursor-pointer hover:scale-[0.8] transition ease-in duration-300" />
       <div>
        <p className='font-bold cursor-pointer'>{title}</p>
        <p className='text-sm text-gray-500 py-[2px] cursor-pointer'>{viewers}</p>
        <div className='flex'>
          <div>
            <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3 cursor-pointer'>
              {tag1}
            </p>
          </div>
          <div>
            {tag2 ? (
              <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3 cursor-pointer'>
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesItems