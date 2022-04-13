import React from 'react';
import FilterBar from './header/FilterBar';
import Nav from './header/Nav';
import SearchBar from './header/SearchBar';
const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white z-10'>
      <Nav />
      <hr />
      <SearchBar />
      <FilterBar />
      <hr />
    </div>
  );
};

export default Header;
