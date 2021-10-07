import React from "react";
import { useDispatch } from "react-redux";
import { addPostFB } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
const PostWrite = (props) => {
    const dispatch = useDispatch();
    const  history = useHistory();
    // const postRef = React.useRef
    const [post, setPost] = React.useState('')
    const write = (e) => {
        setPost(e.target.value);
    }
    // 글작성
    const addPost = () => {
        dispatch(addPostFB({ contents: post }));
        history.push("/");
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