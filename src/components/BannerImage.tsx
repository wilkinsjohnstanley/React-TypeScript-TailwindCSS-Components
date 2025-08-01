import React from 'react'

const BannerImage = () => {
  return (
    <div className='relative h-48 lg:h-96 w-full'>
      <img src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg" alt="Picture of your universe."
        className='absolute inset-0 w-full h-full object-cover '
      />
    </div>
  )
}

export default BannerImage
