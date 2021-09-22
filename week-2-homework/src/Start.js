import React from "react";
import styled from 'styled-components';
import img from "./scc_img01.png";

const Start = (props) => {
    return(
        <Container>
            <Content>
            <img style={{width: '20vw', margin:'16px 8px 16px 0px'}} src={img}/>
            <h5>나는 <YourName>{props.name}</YourName>에 대해 <br/>
            얼마나 알고 있을까?</h5>
            
        
            <Inputbox type="text" placeholder="내 이름" />
            <StartBtn>시작하기</StartBtn>
            </Content>
        </Container>
    );
}    
  const Container = styled.div`
    margin: auto;
    height: 100vh;
    background-color: white;
    
    font-weight: bold;
  `;
  const Content = styled.div`
  line-height: 1.8;
  margin: auto;
  width: 250px;
  color: black;
  height: 200px;
  vertical-align: middle;
  background-color: white;
  padding: 25vh 10px;
  text-align: center;
`;
  const YourName = styled.span`
    background-color: yellowgreen;
    color: black;
    border-radius:15px;
    padding: 5px 10px;
  `;
  const Inputbox = styled.input`
    background-color: rgb(238, 238, 238);
    border-radius:20px;
    padding: 10px 0px 10px 15px;
    color: black;
    margin-top: 20px;
    border: none;
  `;
  const StartBtn = styled.button`
   margin-top:30px;
   background-color: blue;
   color: white;
   text-align: center;
   width: 100px;
   height: 30px;
   border-radius: 50px;
   border: none;
  `; 
export default Start;

