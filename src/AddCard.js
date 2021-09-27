import React from "react";
import styled from "styled-components";
import "./App.css";
import addContent from "./addContent.svg"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addMusicFB, createCard } from "./redux/modules/song";

import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore";


function AddCard() {
    const songRef = React.useRef(null);
    const artistRef = React.useRef(null);
    const linkRef = React.useRef(null);
    const descRef = React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    
    // 등록 완료 팝업창
    const enroll = () => {
        // 각각의 Ref들은 input의 value 값을 가져온다. createCard(song)의 인자인 song은 아래의 { song ... desc: descRef.current.value } 를 인자로 받음
        // 이게 dispatch(createCard({ song: songRef.current.value, artist: artistRef.current.value, link: linkRef.current.value, desc: descRef.current.value }));
        // 이걸로 바뀜
        dispatch(addMusicFB({ song: songRef.current.value, artist: artistRef.current.value, link: linkRef.current.value, desc: descRef.current.value }))   
        alert('등록 되었습니다!');
            history.push("/");
    };
    
    return(
        <>
        <AddCard_List>
            <div className="addBox">
            <h2>곡명</h2>
            <input type='text' ref={songRef}  placeholder="노래 제목을 적어주세요"></input><br/>
            <h2>가수</h2>
            <input type='text' ref={artistRef}  placeholder="아티스트가 더 맞는 표현일까요?"></input><br/>
            <h2>링크</h2>
            <input type='text' ref={linkRef}  placeholder="해당 곡의 링크가 있다면!"></input><br/>
            <h2>설명</h2>
            <input type='text' ref={descRef} placeholder="센스 넘치는 한 줄 요약! 길어도 어차피 글자가 잘려...더 보기"></input>
            </div>
            <button className="addBtn2" onClick={()=>{enroll()}}><img src={addContent} className="plus"/></button>
        </AddCard_List>
            
        </>
    );
}



const AddCard_List = styled.div`
display:flex;
flex-direction:column;
border:40px skyblue solid;
border-radius:30px;
padding:40px 40px 60px 40px;
background-color:skyblue;
margin: 4vh auto;
width: 400px;
max-height: 400px;
`;
export default AddCard;