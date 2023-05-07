import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>TWITCH APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Layout />
    </div>
  )
}

export default Home