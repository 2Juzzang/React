import React from "react";

import { Grid, Input, Button } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  // 댓글 12, useState를 사용해서 댓글 저장
  const [comment_text, setCommentText] = React.useState();
  console.log("프롭스", props);
  const { post_id } = props;
  console.log("포", post_id);
  const onChange = (e) => {
    setCommentText(e.target.value);
  };
  //파이어 스토어에 요청, 리덕스에 추가하는 함수
  const write = () => {
    dispatch(commentActions.addCommentFB(post_id, comment_text));
    setCommentText("");
  };

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
          value={comment_text}
          // 엔터키 이벤트
          onSubmit={write}
          is_submit
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
