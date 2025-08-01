import React from 'react'

const DynamicBanner = () => {
  return (
        <div className='relative h-48 lg:h-96 w-full'>
      <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg" alt="Picture of your universe."
        className='hue-rotate-270 absolute inset-0 w-full h-full object-cover 
        transition duration-1000 ease-in-out opacity-25
        hover:opacity-100 cursor-pointer 
        '
      />

  


    </div>
  )
}

export default DynamicBanner
