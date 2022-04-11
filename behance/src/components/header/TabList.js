import React from 'react';

const TabList = () => {
  return (
    <nav className='flex justify-around items-center w-2/5 text-sm font-bold'>
      <div className='px-4 py-2 bg-black rounded-full text-white hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        프로젝트
      </div>
      <div className='px-4 py-2 hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        이미지
      </div>
      <div className='px-4 py-2 hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        프로토타입
      </div>
      <div className='px-4 py-2 hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        스트림
      </div>
      <div className='px-4 py-2 hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        인물
      </div>
      <div className='px-4 py-2 hover:px-4 hover:py-2 hover:bg-gray-100 hover:rounded-full'>
        무드보드
      </div>
    </nav>
  );
};

export default TabList;
