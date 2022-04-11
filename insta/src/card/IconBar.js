import React from 'react';
import Heart2 from '../icons/Heart2';
import Comment from '../icons/Comment';
import Dm2 from '../icons/Dm2';
import Bookmark from '../icons/Bookmark';
const IconBar = (props) => {
  console.log(props);
  return (
    <div className='flex justify-between py-3 bg-black'>
      <div className='flex text-white px-3'>
        <Heart2 />
        <Comment />
        <Dm2 />
      </div>
      <div className='text-white'>
        <Bookmark />
      </div>
    </div>
  );
};

export default IconBar;
