import React from "react";
import { Grid, Image, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  console.log("코멘트리스트", comment_list);
  const { post_id } = props;

  React.useEffect(() => {
    // 댓글 10, 댓글리스트가 없을 때, 디스패치 해준다.
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        {/* 댓글 11, map으로 FB에 있는 코멘트를 뿌려준다. */}
        {comment_list[post_id].map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

// props 받아오는게 있기 때문에 defaultProps를 넣어준다.
CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  console.log("프랍스", props);
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "Beenzino",
  user_id: "",
  post_id: 1,
  contents: "귀여운 빈지노네요!",
  insert_dt: "2021-01-01 19:00:00",
};
