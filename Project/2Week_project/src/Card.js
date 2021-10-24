import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { loadMusicFB } from "./redux/modules/song";
import { useDispatch } from "react-redux";
// import {db} from "./firebase"
// import { collection, getDoc, getDocs} from "firebase/firestore";

function Card (props) {
    const dispatch = useDispatch();
    React.useEffect( () => {
    dispatch(loadMusicFB());
}, []);
    const list = useSelector((state) => state.song.list);
    return(
            <>
            {list.map((i, index) =>{
                // console.log(list, i, index)
                return(
                    <CardList>
                    <div className="viewBox">
                        <h3>곡명</h3>
                    <h4>{i.song}</h4>
                        <h3>가수</h3>
                    <h4>{i.artist}</h4>
                        <h3>링크</h3>
                    <h4><a href={i.link} className="link" target="_blank">{i.link}</a></h4>
                        <h3>설명</h3>
                    <h4 className="desc">{i.desc}</h4>
                    </div>
                    </CardList>
                );
            })}
            </>
    );
}

const CardList = styled.div`
    text-align:left;
    margin: 0 auto 40px auto;
    padding: 20px 0;
    border-radius: 10px;
    width: 90%;
    height: 300px;
    background-color: white;
`;
// 스토어 가져와 props 로 변환
function setting(state) {
    return {
        state : state
    }    
}
// react-redux에서 제공하는 리덕스와 컴포넌트를 연결시켜주는 함수 connect를 사용, (card)는 연동할 컴포넌트 이름!
export default connect(setting)(Card)
// export default Card;