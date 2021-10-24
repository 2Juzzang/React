import React, { useEffect } from 'react';
import './Style/Post.css';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CommentList from './CommentList';
import MenuBtn from './MenuBtn';

import {
  deleteContentToAxios,
  loadCurrentPostToAxios,
  likeToAxios,
} from '../redux/modules/posts';

const Post = (props) => {
  const dispatch = useDispatch();
  const postInfo = props.value;
  const like = postInfo.like;
  const postId = props.value.postId;
  const [visible, setVisible] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const commentVisible = () => {
    setVisible(!visible);
  };
  //좋아요

  const [color, setColor] = React.useState(null);
  const likeBtn = (e) => {
    if (color === null) {
      setColor({ color: 'blue' });
      dispatch(likeToAxios({ postId: e, like: true }));
    } else {
      setColor(null);
      dispatch(likeToAxios({ postId: e, like: false }));
    }
  };
  //새로고침시 좋아요 누른 게시글 파란색 유지
  React.useEffect(() => {
    if (like === true) {
      setColor({ color: 'blue' });
    } else {
      setColor(null);
    }
  }, []);

  //포스트 아이디를 보내서 댓글 정보 로드
  // const commentLoad = (e) => {
  //   dispatch(loadCurrentPostToAxios(e));
  // };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar /* src={profile} */ className="post__avatar" />
        <div className="post__menubtn">
          <MenuBtn userName={postInfo.userName} currentPost={postInfo} />
        </div>
        <div className="post__topInfo">
          <h3>{postInfo.userName}</h3>
          <p>{postInfo.insertDt}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{postInfo.content}</p>
      </div>

      <div className="post__image">
        <img src={postInfo.image} alt="" />
      </div>

      <div className="post__options">
        <div
          className="post__option"
          onClick={() => {
            likeBtn(postId);
          }}
          style={color}
        >
          <ThumbUpOutlinedIcon />
          <p>좋아요</p>
        </div>

        <div
          className="post__option"
          onClick={() => {
            commentVisible(postId);
          }}
        >
          <ChatBubbleOutlineOutlinedIcon />
          <p>댓글 달기</p>
        </div>

        <div className="post__option">
          <ScreenShareOutlinedIcon />
          <p>공유하기</p>
        </div>
      </div>
      {(postId ? visible : false) ? (
        <CommentList value={postInfo}></CommentList>
      ) : null}
    </div>
  );
};

export default Post;
