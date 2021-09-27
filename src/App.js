import React from "react";
import styled from "styled-components";
import Card from "./Card"
import Logo from "./song.svg"
import Plus from "./plus.svg"
import "./App.css"
import AddCard from "./AddCard";
import {Route} from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  
  return (
    <>
    <Route path="/" exact>
    <Border>
      <img src={Logo} className="logo"/>
    <Container className="con">
      <CardContainer>
      <Card />
      </CardContainer>
    </Container>
    <AddBtn onClick={()=>{
      history.push("/AddCard")
    }}><img src={Plus} className="plus"/>
    </AddBtn>
    </Border>
    </Route>
    <Route path="/AddCard" exact component={AddCard} />
  
    </>
  );
}

const AddBtn = styled.button`
  all:unset;
  cursor: pointer;
  position: relative;
  left: 100%;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  text-align: center;
  bottom: -15px;
  transition: all ease 0.7s;
`;


const Border = styled.div`
border:40px skyblue solid;
border-radius:30px;
padding:0px 40px 100px 40px;
background-color:skyblue;
margin: 4vh auto;
width: 400px;
max-height: 400px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;

border-radius:30px;
text-align: center;
width: 400px;
height: 350px;
background-color: skyblue;
overflow-y: auto;
`;


const CardContainer = styled.div`
`;
const CardList = styled.div`
    text-align:left;
    margin: 0 auto 40px auto;
    padding: 20px 0;
    border-radius: 10px;
    width: 90%;
    height: 300px;
    background-color: white;
`;



export default App;
