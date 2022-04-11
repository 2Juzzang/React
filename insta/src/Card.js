import React from 'react';
import Photo from './card/Photo';
import User from './card/User';
import IconBar from './card/IconBar';
import Contents from './card/Contents';
import Comments from './card/Comments';
const Card = () => {
  const test = ['1', '2', '3'];
  return (
    <>
      {test.map((post) => {
        return (
          <div className='h-2/3 bg-white'>
            <User />
            <Photo />
            <IconBar />
            <Contents />
            <Comments />
          </div>
        );
      })}
    </>
  );
};

export default Card;
