import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

import Permit from "../shared/Permit"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postAcitons } from "../redux/modules/post";
const PostDetail = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    console.log("아이디", id)

    const user_info = useSelector((state) => state.user.user);
    // console.log('aa', user_info)

    const post_list = useSelector(store => store.post.list);
    const post_idx = post_list.findIndex(p => p.id === id);
    const post = post_list[post_idx];


    //단일 데이터
    React.useEffect(() => {
        //데이터가 있으면 굳이 불러오 필요가 없기 때문에 있다면 return
        if(post){
            return;
        }
        //댓글4 디스패치를 통해 DB가져오기
        dispatch(postAcitons.getOnePostFB(id));
    }, []);

    return (
        <React.Fragment>
          {/* 댓글 5, 비회원일 경우 user_info가 null이며 uid가 없어 에러가 날 것 >> 옵셔널 체이닝 사용 */}
            {post && ( <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />)}
           {/* 댓글 6, 게시물에 대한 댓글은 댓글을 단 게시물에만 보여야 하므로 id 설정 */}
            {/* 권한 있는 회원만 작성할 수 있게 permit으로 감싼다. */}
            <Permit>
            <CommentWrite post_id={id} />
            </Permit>
            <CommentList post_id={id} />
        </React.Fragment>
    )
}

export default PostDetail;