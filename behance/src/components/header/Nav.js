import React from 'react';

const Nav = () => {
  return (
    <nav className='flex h-14 px-6 justify-between items-center border-b-1'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <img className='w-20' src='/behance.png' alt='' />
        </div>
        <ui className='flex justify-evenly w-56 list-none'>
          <li className='flex items-center h-14 font-bold hover:border-b-2 hover:border-black'>
            탐색
          </li>
          <li className='flex items-center h-14 font-bold hover:border-b-2 hover:border-black'>
            라이브스트림
          </li>
          <li className='flex items-center h-14 font-bold hover:border-b-2 hover:border-black'>
            직업
          </li>
        </ui>
      </div>

      <div className='flex items-center'>
        <div className='flex justify-evenly w-40'>
          <div className='px-4 py-1 text-sm font-bold rounded-full border hover:bg-gray-100'>
            로그인
          </div>
          <div className='px-4 py-1 text-sm text-white font-bold rounded-full bg-blue-600 hover:bg-blue-800'>
            등록
          </div>
        </div>
        <div className='ml-8'>
          <img className='w-16' src='/adobe.png' alt='' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
