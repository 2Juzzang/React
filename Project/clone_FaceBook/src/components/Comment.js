import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import {
  removeCommentToAxios,
  removeCommentToPost,
} from '../redux/modules/posts';
import { style } from '@mui/system';
const Comment = (props) => {
  const commentInfo = props.value;
  const dispatch = useDispatch();

  const [TF, setTF] = React.useState(false);
  const editPost = () => {
    setTF(!TF);
  };

  //삭제
  const deletePost = (e) => {
    dispatch(removeCommentToAxios(e));
  };
  //수정,삭제 모달
  const [modal, setModal] = React.useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <>
        {(commentInfo.commentId ? TF : false) ? (
          <>
            <CommentForm
              value={commentInfo.commentId}
              TF={TF}
              TFfunction={editPost}
            />
            <ModifyCancle
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={editPost}
            >
              취소
            </ModifyCancle>
          </>
        ) : (
          <Container>
            <UserImg bg={commentInfo.profile} />
            <Cmt>
              <UserName>
                <p style={{ fontSize: '12px' }}>{commentInfo.userName}</p>
              </UserName>
              <p style={{ fontSize: '15px' }}>{commentInfo.comment}</p>
            </Cmt>

            <OptionBox onClick={openModal}>···</OptionBox>
            {modal ? (
              <>
                <ModalDiv>
                  <ModalText style={{ cursor: 'pointer' }} onClick={editPost}>
                    수정
                  </ModalText>
                  <ModalText
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      if (window.confirm('삭제하시겠습니까?'))
                        deletePost(commentInfo.commentId);
                    }}
                  >
                    삭제
                  </ModalText>
                </ModalDiv>
              </>
            ) : null}
          </Container>
        )}
      </>
    </React.Fragment>
  );
};

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background-color: wheat;
  background-size: cover;
  background-image: url(${(props) => props.bg});
`;
const Cmt = styled.div`
  width: 0 auto;
  background-color: #eee;
  margin: 0 10px 0 20px;
  border-radius: 20px;
  padding: 8px 12px;
`;
const UserName = styled.div`
  font-weight: 600;
`;

const OptionBox = styled.div`
  width: 23px;
  height: 20px;
  margin: auto 0;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0;
  text-align: center;
  padding-bottom: 3px;

  &:hover {
    opacity: 100;
    background-color: #eee;
  }
`;
const ModalDiv = styled.div`
  padding: 5px 2px;
  width: 200px;
  background-color: white;
  position: relative;
  border-radius: 5px;
  top: 45px;
  left: -110px;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
`;
const ModalText = styled.p`
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`;
const ModifyCancle = styled.p`
  cursor: pointer;
  position: relative;
  left: 60px;
  top: -15px;
  font-size: 14px;
`;
const Container = styled.div`
  width: 680px;
  display: flex;
  margin-bottom: 10px;
  border-radius: 15px;
  &:hover ${OptionBox} {
    opacity: 100;
  }
`;
export default Comment;
