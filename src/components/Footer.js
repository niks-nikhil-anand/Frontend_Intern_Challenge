import React from 'react';
import { FaReact, FaNodeJs, FaCode, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full py-8 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-blue-500/20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
          <div className='mb-4 md:mb-0 flex flex-col justify-center items-center'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2'>
               Full Stack Developer
            </p>
            <p className='text-sm font-bold text-transparent bg-clip-text bg-gray-400 mb-2'>
              Nikhil Anand
            </p>
          </div>
          
          <div className='flex gap-6 text-blue-400'>
            <div className='bg-gray-800/70 p-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer'>
              <FaReact className='h-5 w-5' />
            </div>
            <div className='bg-gray-800/70 p-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer'>
              <FaNodeJs className='h-5 w-5' />
            </div>
          </div>
        </div>
        
        <div className='pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm'>
          <p>
            © {currentYear} Nikhil Anand Portfolio. All rights reserved.
          </p>
          <p className='flex items-center gap-2 mt-2 md:mt-0'>
            Made with <FaHeart className='text-red-500' /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;