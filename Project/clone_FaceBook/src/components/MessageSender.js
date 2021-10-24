import React, { useState } from 'react';
import './Style/MessageSender.css';

import PostWrite from './PostWrite';

import { Avatar } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FilterIcon from '@mui/icons-material/Filter';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useSelector } from 'react-redux';

const MessageSender = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [image, setImage] = useState('');
  const userInfo = useSelector((state) => state.user);

  const handleModal = () => {
    setModalShow(true);
  };

  const placeholder = `${userInfo.userName}님, 무슨 생각을 하고 계신가요?`;

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input onClick={handleModal} placeholder={placeholder} />
        </form>
      </div>
      <PostWrite show={modalShow} onHide={() => setModalShow(false)} />
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCameraFrontIcon style={{ color: '#f02849' }} />
          <h3>라이브 방송</h3>
        </div>

        <div className="messageSender__option">
          <FilterIcon style={{ color: '#45bd62' }} />
          <h3>사진/동영상</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: '#f7b928' }} />
          <h3>기분/활동</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
