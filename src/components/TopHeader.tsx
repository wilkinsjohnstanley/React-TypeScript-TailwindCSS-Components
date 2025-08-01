import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2 text-lg font-playfair text-[rgb(156,108,84)] p-6 '>
      {/* Left-side Nav Links */}
      <div className='flex space-x-4  p-6 '>
        <a href="#" className='text-[rgb(156,108,84)] hover:underline hover:text-white'>Explore</a>
        <a href="#" className='text-[rgb(156,108,84)] hover:underline hover:text-white'>Understand</a>
        <a href="#" className='text-[rgb(156,108,84)] hover:underline hover:text-white'>Discover</a>
      </div>
      {/* Right-side Social Media Links */}
      <div className='inline-flex flex-items-center justify-between space-x-4'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white">
        <Facebook  className='cursor-pointer hover:text-white'/></a>

         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white">
        <Instagram  className='cursor-pointer hover:text-white'/></a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white">
        <Twitter  className='cursor-pointer hover:text-white'/></a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white">
        <Youtube  className='cursor-pointer hover:text-white'/></a>
      </div>
    </div>
  )
}

export default TopHeader
