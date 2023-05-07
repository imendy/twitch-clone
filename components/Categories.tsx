import React from 'react'
import CategoriesItems from './CategoriesItems'



const Categories = () => {
  return (
      <div id='top' className="mt-2 p-2 md:p-3">
      <h2 className="px-2 font-bold"> 
        <span className="text-[#9147ff]"> Top Categories </span>We think you'll love this
      </h2>

        {/*Top Container */}

        <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 py-4">
          <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg'
          title='Call Duty: War'
          viewers='38k'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
          title='Just Chatting'
          viewers='233k Viewers'
          tag1='IRL'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg'
          title='Fortnite'
          viewers='53k Viewers'
          tag1='Shooter'
          tag2='Action'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
          title='Minecraft'
          viewers='22k Viewers'
          tag1='Strategy'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'
          title='Grand Thefy Auto V'
          viewers='95k Viewers'
          tag1='Adventure'
        />

        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
          title='Apex Legends'
          viewers='112k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
          title='Valorant'
          viewers='151k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/1614555304-188x250.jpg'
          title='Call of Duty: Mod..'
          viewers='7.5k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg'
          title='Dead by Daylight'
          viewers='33k Viewers'
          tag1='Action'
          tag2='Horror'
        />
        <CategoriesItems
          img='https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'
          title='League of Legends'
          viewers='31k Viewers'
          tag1='Action'
        />
        
        </div>
      </div>
      
  )
}

export default Categories