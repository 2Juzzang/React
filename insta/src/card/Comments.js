import React from 'react';

const Comments = () => {
  const test = [
    { id: 'pepe', comment: 'ㅠㅠ' },
    { id: 'ronaldo', comment: 'kkkkk' },
  ];
  return (
    <div>
      <div className='px-3 py-1 text-sm bg-black text-white'>
        {test.map((c) => {
          return (
            <div>
              <span className='pt-12 font-bold'>{c.id}</span>{' '}
              <span>{c.comment}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
