import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";


const account = () => {
  const { data: session } = useSession();
  if (session) {
    return (

      <div className="log pt-[100px] flex flex-col max-w-[330px] w-full p-4 mx-auto items-center rounded-xl">
        <h1 className="text-lg min-[500px]:text-2xl font-bold text-black">Welcome, {session.user.name}</h1>
        <p className="py-2 text-black">Signed in as {session.user.email}</p>
        <div className="m-auto pb-4 rounded-full">
         <Image 
           src={session.user.image} 
           width='50' 
           height='50' 
           className="rounded-full" /> 
        </div>
        <button 
          className="flex items-center justify-center bg-gray-600 my-4 px-6 py-3 border border-gray-600"
          onClick={() => signOut()}>Sign out</button>
          <div>
            <Link href="/">
 <button className="px-8 py-3 bg-transparent border border-[#9147ff] hover:bg-[#9147ff] my-4 font-bold rounded-lg text-[#9147ff] hover:text-white ease-in duration-300">
            Home
          </button>
        </Link>
       </div>
      </div>
    )
  }
  return (
    <div className="log pt-[100px] flex flex-col max-w-[330px] w-full p-4 mx-auto items-center rounded-xl">
      <h1 className="text-xl min-[500px]:text-2xl font-bold text-black">Login</h1>
      <p className="py-2 font-bold text-black">Choose the account to sign in with</p>
      <button
        className="flex items-center justify-center bg-gray-600 my-4 px-4 py-3 border border-gray-600"
        onClick={() => signIn()}>
        < BsGithub className="mr-2" />
        Sign in with <span className="font-bold pl-1">Github</span></button>

       <button
        className="flex items-center justify-center bg-blue-600 my-4 px-4 py-3 border border-blue-600"
        onClick={() => signIn()}>
        <FcGoogle className="mr-2" />
        Sign in with <span className="font-bold pl-1">Google</span></button>
        <div>
            <Link href="/">
              <button className="px-8 py-3 bg-transparent border border-[#9147ff] hover:bg-[#9147ff] my-4 font-bold rounded-lg text-[#9147ff] hover:text-white ease-in duration-300">
            Home
          </button>
        </Link>
       </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(account), {ssr: false})