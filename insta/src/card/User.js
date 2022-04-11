import React from 'react';

const User = () => {
  return (
    <div className='flex p-2 bg-black'>
      <div className='flex items-center mr-2'>
        <img
          className='w-10 h-10 rounded-full object-cover'
          src='/pepe1.png'
          alt=''
        />
      </div>
      <div className='items-align text-white'>
        <p className='font-bold'>Pepe</p>
        <p className='text-xs'>한강</p>
      </div>
    </div>
  );
};

export default User;
