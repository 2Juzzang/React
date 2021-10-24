import React, { useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CommentList = (props) => {
  const comment_data = props.value.comment;

  return (
    <React.Fragment>
      <Line />
      <Container>
        <ChildContainer>
          <CommentForm value={props.value} />
          {comment_data &&
            comment_data.map((a) => {
              return (
                <div>
                  <Comment id={a.commentId} value={a} />
                </div>
              );
            })}
        </ChildContainer>
      </Container>
    </React.Fragment>
  );
};

const Line = styled.div`
  width: 100%;
  height: 0.6px;
  background-color: lightgray;
`;
const Container = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 25px;
  margin: 0 auto;
  border-radius: 15px;
`;
const ChildContainer = styled.div`
  width: 700px;
  height: auto px;
  background-color: white;
  color: black;
  padding: 0 16px 16px 16px;
  margin: 0 auto;
  border-radius: 15px;
`;
export default CommentList;
