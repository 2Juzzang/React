import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostFB } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
const PostWrite = (props) => {
    //수정 구현
    //id값 추출
    // console.log("프롭스2", props.match.params.id)
    const post_id = props.match.params.id
    const postList = useSelector((state) => state.post.post);
    //객체를 출력
    const result = postList.find((p) => p.id === post_id);
    //수정하기로 들어가면 14번이 잘 출력이 되는데
    console.log("포스트리스트 값", result)
    // 새로고침 시에는 14번이 출력이 안됨
    //객체가 있으면 내용을, 없다면 빈 값을
    
    const [post, setPost] = React.useState(result ? result.contents : "");
    //수정 구현 끝

    const dispatch = useDispatch();
    const  history = useHistory();
    // const postRef = React.useRef
    
    const write = (e) => {
        setPost(e.target.value);
    }
    // 글작성
    const addPost = () => {
        dispatch(addPostFB({ contents: post }));
        history.replace("/");
    };
    return(
        <div>
            <input type="file" />
            
            <textarea rows={10} style={{width: "100%", padding:"8px", boxSizing:"border-box"}}
            placeholder="글을 작성해주세요"
            onChange={write}
            >
             {post}   
            </textarea>
            <button 
            style={{width: "100%"}}
            onClick={()=>{addPost()}}
            >작성하기</button>
        </div>
    );
}

export default PostWrite;