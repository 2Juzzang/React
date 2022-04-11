import React from 'react';
import Search from '../../icons/Search';
import Input from './Input';
import TabList from './TabList';

const SearchBar = () => {
  return (
    <div className='mt-6 px-6'>
      <div className='flex w-full h-12 bg-white border-solid rounded-full border'>
        <div className='flex w-3/5 h-full items-center bg-gray-50 rounded-l-full border-r'>
          <Search />
          <Input />
        </div>
        <TabList />
      </div>
    </div>
  );
};

export default SearchBar;
