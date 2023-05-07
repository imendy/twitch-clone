import React from 'react'
import LiveChannels from './LiveChannels'
import Hero from './Hero'
import IconBar from './IconBar'
import Categories from './Categories'

const Main = () => {
  return (
    <div className='absolute left-[48px] md:left-[150px]'>
         
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main