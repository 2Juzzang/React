import { fontSize, style } from '@mui/system';
import React from 'react';
import styled from 'styled-components'

import Login from '../components/Login';

import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const boxStyle = {
  width: '160px',
  height:'206px',
  borderRadius: '8px',
  bgcolor: '#FFF',
  border: '0px solid #000',
  boxShadow: 1,
  p: '16px',
  outline: 0,
  margin:'40px 0px'
};


const Sign = () => {
  return (
    <React.Fragment>
      <Wrap>
        <LoginForm>
          <div style={{ margin: '-50px 0px 0px -20px', }}>
            <img style={{ width:'200px'}} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
          </div>
          <div style={{ fontSize:'24px'}}>최근 로그인 기록</div>
          <div style={{ fontSize:'15px'}}>사진을 클릭하거나 계정을 추가하세요.</div>
          <Box sx={boxStyle}>
            <div style={{textAlign:'center'}}>
            <AddCircleIcon sx={{fontSize:'42px', color:'#1877F2', height:'200px'}}/>
            </div>
        </Box>
        </LoginForm>
        <LoginForm>
        <Login />
        </LoginForm>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display:flex;
  background-color: #f0f2f5;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.div`
  display:flex;
  flex-direction: column;
  width: 100vw;
  height: 60%;
  margin: auto 20px;
  padding: 24px;
  position: relative;
  top:0px;
  left: 0px;
`;



export default Sign;
