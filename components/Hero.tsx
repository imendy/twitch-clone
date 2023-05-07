import React from 'react';


const Hero = () => {
  return (
    <div id='hero' className="mt-4 p-2 md:p-3">
     <div className="relative overflow-hidden w-full pt-[56.25%]">
       <iframe className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" 
         src="https://www.youtube.com/embed/4BWbszS5dr8" 
         title="YouTube video player" 
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen>
       </iframe>
     
     </div>
    
    </div>
  )
}

export default Hero