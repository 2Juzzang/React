import { useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import PostWrite from '../pages/PostWrite';
import { useHistory } from 'react-router-dom';

import Home from '../pages/Home';
import './App.css';

function App() {
  const history = useHistory();
  return (
      <div style={{width:"360px", height:"100%", margin:"auto"}}>
        <div style={{backgroundColor:"#EEEEEE", height:"100%"}}>

            {/* 헤더 */}
            <div style={{fontSize:"20px", fontWeight:"bold" , padding:"8px", display:"flex", justifyContent:"space-between"}}>
              
              <div onClick={()=>{history.push("/")}}>Hello</div>
              {/* 로그인 가입 div */}
              {/* <div>
                <span onClick={ () => {addImg('https://images.velog.io/images/2_juzzang/post/aff4e7a2-0bbe-4b4e-906d-c33dbc5aacd9/%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80.PNG')} }
                >작성</span> */}
                <div>
                <span>로그인</span>  <span>회원가입</span>
                </div>
            </div>

            <Route path="/" exact component={Home} />
            <Route path="/write" exact component={PostWrite} />
            <Route path="/write/:id" exact component={PostWrite} />


        </div>
      </div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eee;
  width: 360px;
  height: 100vh;
  margin: auto;
`;
export default App;
