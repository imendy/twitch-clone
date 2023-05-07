import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';
import React, { useState }  from 'react';



function MyApp({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
     <Navbar />
     <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp


