import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostFB, loadPost, editPostFB } from "../redux/modules/post";
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
    // console.log("포스트리스트 값", result)
    // 새로고침 시에는 14번이 출력이 안됨
    //객체가 있으면 내용을, 없다면 빈 값을
    // const [btnText, setBtnText] = React.useState(result ? "수정하기" : "작성하기")
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
    // const 수정버튼으로 = () => {
    //     if(result){
    //         setBtnText()
    //     }
    // }

    const dispatch = useDispatch();
    const  history = useHistory();
    // const postRef = React.useRef
    
    const write = (e) => {
        setPost(e.target.value);
    }
    // 글수정 
    const editPost = () => {
        console.log('asd')
        dispatch(editPostFB(post_id,{ contents: post }))
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
            
            <textarea value={post} rows={10} style={{width: "100%", padding:"8px", boxSizing:"border-box"}}
            placeholder="글을 작성해주세요"
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