import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  addCommentToAxios,
  addCommentToPost,
  modifyCommentToAxios,
  modifyCommentToPost,
} from '../redux/modules/posts';

const CommentForm = (props) => {
  const commentId = props.value;
  const postId = props.value.postId;
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState();
  //제출은 엔터키
  const enterKey = (e) => {
    if (e.key === 'Enter') {
      if (props.TF) {
        dispatch(modifyCommentToAxios(commentId, { comment: comment }));
        setComment('');
        props.TFfunction(!props.TF);
      } else {
        dispatch(addCommentToAxios({ comment: comment }, postId));
        setComment('');
      }
    }
  };
  return (
    <React.Fragment>
      <Container>
        <UserImg />
        <InputBox
          placeholder="댓글을 입력하세요..."
          type="text"
          value={comment || ''}
          onKeyUp={enterKey}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 0;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const UserImg = styled.div`
  width: 36px;
  height: 32px;
  border-radius: 25px;
  background-color: wheat;
`;
const InputBox = styled.input`
  width: 100%;
  margin-left: 20px;
  border-radius: 20px;
  padding: 8px 20px 8px 16px;
  background-color: #eee;
  border: none;
  &:focus {
    outline: none;
  }
`;
export default CommentForm;
