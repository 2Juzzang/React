import React, { useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deletePostFB, loadPostFB } from '../redux/modules/post';
const Home = (props) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    // 구독
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
                    history.push("/write")
                  }}>
                  글쓰기
                </button>
        </div>
        {
            postList.map((a, i) => {
            return  ( 
            <div key={i} style={{ width:"360px", height: "180px", display:"flex", flexDirection:"column", marginTop:"40px" ,backgroundColor:"white" }}>
                <div onClick={()=>{console.log(a)}} style={{marginBottom:"10px"}}>{a.contents}</div>
                <button 
                onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  history.push(`/write/${a.id}`);
                  // console.log("뭘받니?", a)
                }}
                style={{all:"unset", backgroundColor:"red", width:"50px", position:"relative"}}>수정하기</button>
                <button 
                onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  if(window.confirm("삭제하시겠습니까?"))
                  // console.log("그렇군요", postList[i].id)
                  // dispatch(deletePost(postList[i].id))
                  dispatch(deletePostFB(postList[i].id));
                }}
                style={{all:"unset", backgroundColor:"black", width:"50px", position:"relative"}}>삭제하기</button>
            </div>
            )
            })
        }
        </>
    );
}

export default Home;