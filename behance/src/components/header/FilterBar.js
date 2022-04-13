import React from 'react';

const FilterBar = () => {
  return (
    <div className='flex justify-between p-6 bg-white'>
      <div className='flex items-center h-9'>
        <div className='border rounded-md w-48 p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-44 text-sm font-bold' id='dropdown'>
            <option key='creative'>크리에이티브 분야</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='tool'>도구</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='color'>색상</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='location'>위치</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='school'>학교</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='color'>소스 파일</option>
          </select>
        </div>

        <div className='border rounded-md w-auto p-2 mr-4 hover:border-black hover:duration-500'>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='desc'>구독</option>
          </select>
        </div>
      </div>

      <div className='flex items-center h-9'>
        <div className='p-2 mr-4'>
          <div className='flex pl-1 text-xs text-gray-400 font-bold hover:text-black hover:duration-1000'>
            정렬
          </div>
          <select className='w-auto text-sm font-bold' id='dropdown'>
            <option key='desc'>추천</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
