// PostList.js
import React from "react";
//useselector를 이용해 가져와서 뷰(리스트)를 뿌려준다
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { Grid } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  //상세페이지로 넘어가기
  const {history} = props; 
  console.log(post_list);

  React.useEffect(() => {
    // 2 unshift를 써도 첫 글로 안와서 리스트의 길이가 0일때 불러오게 함
    if (post_list.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return ( 
    <React.Fragment>
      <Grid bg={"#EFF6FF"} padding="20px 0px">
      {/* <Post/> */}
      <InfinityScroll
       callNext={() => {
         dispatch(postActions.getPostFB(paging.next));
       }}
       is_next={paging.next? true : false}
       loading={is_loading}
      >
      {post_list.map((p, idx) => {
        if(p.user_info.user_id === user_info?.uid){
        return (
          <Grid bg={"white"} margin="8px 0px" key={p.id} _onClick={() => {history.push(`/post/${p.id}`);}}>
            <Post  {...p} is_me/>;
          </Grid>
        );
        
      }else{
        return (
          <Grid bg={"white"} key={p.id} _onClick={() => {history.push(`/post/${p.id}`);}}>
            <Post  {...p} />;
          </Grid>
        );
        
      }
    })}
    
    </InfinityScroll>
    </Grid>
    <button 
      onClick={() => {
        dispatch(postActions.getPostFB(paging.next));
      }}>
        추가로드
        </button>
    </React.Fragment>
  );
};

export default PostList;
