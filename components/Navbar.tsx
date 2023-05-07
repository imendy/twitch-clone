import React, { useState, Fragment  }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const { data: session } = useSession();
  
  
  return (
    <div className="fixed flex flex-nowrap z-10 bg-gray-800 h-14 w-full items-center p-4 mb-[4px]">
      
       {/*left side*/}
      <div className="flex grow items-center justify-start">
        <Link href='/'>
          <a className="flex items-center">
            <Image 
              src={Logo} 
              width='20' 
              height='20' 
              className="cursor-pointer z-10"
              />
          </a>
        </Link>
        <Link href="/#browse">
          <p className="p-4 font-bold cursor-pointer">Browse</p>
        </Link>
        
        <div>
          <Menu as='div' className='relative text-left'>
            <div className='hidden min-[500px]:flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={10} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#hero'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                       Home
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#live'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Live Channels
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#top'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Top Categories
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      
      {/*middle*/}
      <div className="items-center justify-center hidden min-[500px]:flex grow-[1]">
        <div className="bg-gray-500 text-white flex justify-between items-center rounded-2xl max-m-[250px] w-full m-auto p-2">
           <div>
             <input type="text" 
               className="bg-transparent border-none text-white focus:outline-none" 
               placeholder="Search"
               />
           </div>
          <div> 
            <BsSearch size={8}  />
          </div>
        </div>
      </div>

      
       {/*right side*/}
     <div className="hidden min-[500px]:flex grow items-center justify-end mt-2">
       {session 
         ? (<div>
             
           <div className='flex'>
             
               <Link href='/account'>
                <div className='flex'>
                   <Image 
                    src={session.user.image} 
                    width='20' 
                    height='20' 
                    className="cursor-pointer rounded-full"
                    />
                </div>
            </Link>
          </div>
           <Link href='/account'>
                <div className="flex items-center">
                  <h5 className="pr-4 cursor-pointer">Welcome, {session.user.name}</h5>
                </div>
           </Link>
         </div>) 
         
         : (<div className="flex items-center py-2">
        <Link href="/account">
          <button className="px-6 py-2 bg-[#9147ff] font-bold rounded-2xl mr-2 hover:scale-[0.8] transition ease-in duration-300">
            Account
          </button>
        </Link>
        <BsPerson size={15}  className="cursor-pointer"
          />
      </div>)}
     </div>


      {/* user image on small screen */}
       <div className="flex min-[500px]:hidden grow items-center justify-end mt-2">
       {session 
          ? (<div>
              <Link href='/account'>
                <div className='flex'>
                   <Image 
                    src={session.user.image} 
                    width='20' 
                    height='20' 
                    className="cursor-pointer rounded-full"
                    />
                </div>
            </Link>
           </div>)
          

       : (<div className="flex items-center py-2">
        
        
      </div>)}
       
     </div>

    {/*hamburger menu*/}
     <div onClick={handleMenu} className="hidden max-[500px]:block z-10 cursor-pointer">
       {menu ? <MdOutlineRestaurantMenu size={18} /> : <BiMenuAltRight size={20} />}
     </div>
      
    {/*mobile menu*/}
    <div className={
      menu
      ? "min-[500px]:hidden fixed top-0 right-0 w-[60%] h-[60%] justify-center items-center flex bg-gray-800 ease-in duration-300 rounded-xl"
      : "min-[500px]:hidden fixed top-[-100%] right-0 w-[60%] h-[60%] justify-center items-center flex bg-[#0e0e10] ease-in duration-300"
    }
      >
      <ul className="text-center">
        <li onClick={() => setMenu(false)} className="text-xl font-bold text-white p-4"> 
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setMenu(false)} className="text-xl font-bold text-white p-4"> 
         <Link href="/#live">Live Channels</Link>
       </li>
        <li onClick={() => setMenu(false)} className="text-xl font-bold text-white p-4"> 
         <Link href="/#top">Top Categories</Link>
       </li>
        <li onClick={() => setMenu(false)} className="text-xl font-bold text-white p-4"> 
         <Link href="/account">Account</Link>
       </li>
      </ul>
      
    </div>      
    </div>
  )
}

export default Navbar