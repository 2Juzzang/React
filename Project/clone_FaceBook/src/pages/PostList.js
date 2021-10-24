import React from 'react';
import '../components/Style/PostList.css';
import StoryReal from '../components/StoryReal';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsToAxios } from '../redux/modules/posts';

import { history } from '../redux/configStore';
// import { logOut } from '../redux/modules/user';
// import { removeToken } from '../utills/auth';

// const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;


const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);
  const signCheck = useSelector((state) => state.user.isAuthorized)

  React.useEffect(() => {
    if (signCheck === false) {
      window.alert('로그인이 필요합니다.')
      history.push('/sign')
      return;
    }
    dispatch(loadPostsToAxios());
  }, []);

  // const sign = async () => {
  //   await dispatch(logOut());
  //   removeToken(TOKEN_KEY);
  //   history.replace('/sign');
  // };

  return (
    <div className="postList">
      <StoryReal />
      <MessageSender />
      {postList &&
        postList.map((p, i) => {
          return <Post value={p} key={i} />;
        })}
    </div>
  );
};

export default PostList;
