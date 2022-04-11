import React from 'react';
import Home from './icons/Home';
import Profile from './icons/Profile';
import Reels from './icons/Reels';
import Shop from './icons/Shop';
import Zoom from './icons/Zoom';

const Footer = () => {
  return (
    <div className='fixed flex items-center w-96 h-12 bottom-0 text-white bg-black'>
      <div className='flex justify-evenly w-96'>
        <Home />
        <Zoom />
        <Reels />
        <Shop />
        <Profile />
      </div>
    </div>
  );
};

export default Footer;
