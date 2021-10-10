import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostFB, editPostFB } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
const PostWrite = (props) => {
    //수정 구현
    //id값 추출
    const post_id = props.match.params.id
    // 구독한 상태를 담아 postList라는 상수에 저장
    const postList = useSelector((state) => state.post.post);
    //객체를 출력
    const result = postList.find((p) => p.id === post_id);
    //수정하기로 들어가면 14번이 잘 출력이 되는데
    // console.log("포스트리스트 값", result)
    // 새로고침 시에는 14번이 출력이 안됨
    //객체가 있으면 내용을, 없다면 빈 값을
    // const [btnText, setBtnText] = React.useState(result ? "수정하기" : "작성하기")

    // result가 있을 때 result.contents가 post에 담기고, 없을 경우 빈 값을 반환한다.
    const [post, setPost] = React.useState(result ? result.contents : "");
    // React.useEffect(() => {
    //     if (post_id && !result) {
    //       console.log("포스트 정보가 없어요!");
    //       history.goBack();
    
    //       return;
    //     }
    //     if (result) {
    //         dispatch(loadPost(post));
    //       }
    //     }, []);
    // 수정 구현 끝
   

    const dispatch = useDispatch();
    const  history = useHistory();
    // const postRef = React.useRef
    
    // 값 변경시 변수 post의 값이 input의 값으로 변경된다.
    const write = (e) => {
        // post 값 변경함수 setPost 호출 
        setPost(e.target.value);
    }
    // 글수정 
    const editPost = () => {
        dispatch(editPostFB(post_id,{ contents: post }))
        console.log("포스트아이디", post_id, "포스트", post)
        history.push("/");
    };
    // 글작성
    const addPost = () => {
        dispatch(addPostFB({ contents: post }));
        history.push("/");
    };
    return(
        <div>
            <input type="file" />
            
            <textarea value={post} rows={10} style={{width: "100%", padding:"8px", boxSizing:"border-box", resize:"none"}}
            placeholder="글을 작성해주세요"
            // 값 변경시 write함수 호출
            onChange={write}
            >
               
            </textarea>
            {/* 삼항연산자로 수정하기, 작성하기 버튼, 텍스트 바꾸기 */}
            {result ? (
            <button style={{width: "100%"}} onClick={()=>{editPost()}}>수정하기</button>
            ) : (
            <button style={{width: "100%"}} onClick={()=>{addPost()}}>작성하기</button>
            )}
        </div>
    );
}

export default PostWrite;