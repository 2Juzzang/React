import React from 'react';
import Heart from './icons/Heart';
import Dm from './icons/Dm';
import Plus from './icons/Plus';

const Header = () => {
  return (
    <div className='fixed flex justify-between items-center top-0 w-96 h-12 text-3xl text-white bg-black'>
      <div className='p-2'>instagram</div>
      <div className='flex justify-evenly'>
        <Plus />
        <Heart />
        <Dm />
      </div>
    </div>
  );
};

export default Header;
