import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopBanner = () => {

    const [visible, setVisible] = useState(true);
    if(!visible) return null;

  return (
    <div 
    className='w-full 
    bg-red-600 
    text-white 
    text-sm md:text-base 
    py-2 px-5 
    flex items-center 
    justify-between 
    fixed top-0 left-0 
    z-50 
    shadow-md'>
      <span>
        ONLINE EXCLUSIVE 
        <i className="fa-solid fa-flag-usa"></i>  
        Save 10% OFF ALL MADE IN USA ITEMS!
        </span>

      <button 
      className='text-white text-xl font-bold leading-none hover:text-gray-200 transition'
      onClick={() => setVisible(false)}> &times; 
      </button>
    </div>
  )
}

export default TopBanner



