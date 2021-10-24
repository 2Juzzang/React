import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deletePostFB, loadPostFB } from '../redux/modules/post';
const Home = (props) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    // 구독
    // 리듀서에서 리턴해서 갱신한 post의 값을 구독, map을 통해 뷰 구현, 삭제시에도 사용
    const postList = useSelector((state) => state.post.post);
    // console.log("포스트리스트", postList)
    
    //새로고침 했을 때 데이터를 한 번만 로드하기 위해 
      React.useEffect(() => {
        // if(postList.length ===0) { dispatch(loadPostFB());}
        //loadPostFB를 호출
        dispatch(loadPostFB());
      }, []);
      
    return(
        <>
        <div style={{ width:"360px", height: "30px", backgroundColor:"black", margin:"auto", display:"flex", justifyContent:"flex-end", alignItems:"center" }}>
                
                <button style={{ all:"unset", color:"white", fontSize:"14px", marginRight:"10px", cursor:"pointer" }}
                onClick={()=>{
                  // 클릭시 글쓰기 페이지로
                    history.push("/write")
                  }}>
                  글쓰기
                </button>
        </div>
        {
          // 맵 메서드로 뷰에 뿌려주기
            postList.map((a, i) => {
            return  ( 
              // 컴포넌트로 만들었으면 좋았을 걸
              //수정하기
            <div key={i} style={{ width:"360px", height: "180px", display:"flex", flexDirection:"column", marginTop:"40px" ,backgroundColor:"#eee" }}>
                <div style={{marginBottom:"10px"}}>{a.contents}</div>
                <button 
                onClick={(e)=>{
                  // 이벤트 버블링, 캡쳐링 방지
                  e.preventDefault();
                  e.stopPropagation();
                  // 글의 id값이 있는 페이지로 이동 (수정)
                  history.push(`/write/${a.id}`);
                  // console.log("a가 받아오는 데이터 확인", a)
                }}
                style={{all:"unset", backgroundColor:"red", position:"relative",textAlign:"center", marginBottom:"5px", padding:"10px"}}>수정하기</button>
                {/* 삭제하기 - 1 */}
                <button 
                onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  //삭제 알림창
                  if(window.confirm("삭제하시겠습니까?"))
                  // id값을 넘겨준다. 
                  dispatch(deletePostFB(postList[i].id));
                }}
                style={{all:"unset",color:"white", backgroundColor:"black",textAlign:"center", position:"relative", padding:"10px"}}>삭제하기</button>
            </div>
            )
            })
        }
        </>
    );
}

export default Home;