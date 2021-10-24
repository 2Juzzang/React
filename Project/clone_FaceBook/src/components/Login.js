import React from 'react';
import { history } from '../redux/configStore';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginToServer } from '../redux/modules/user';

import Signup from './Signup';
import { margin } from '@mui/system';

const boxStyle = {
  width: '90%',
  maxWidth: '400px',
  borderRadius: '8px',
  bgcolor: '#FFF',
  border: '0px solid #000',
  boxShadow: 7,
  p: '16px',
  outline: 0,
};

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  const handleChangeEmail = (email) => {
    setEmail(email.target.value);
  };

  const handleChangePassword = (password) => {
    setPassword(password.target.value);
  };

  const handleModal = () => {
    setModalShow(true);
  };

  const login = () => {
    dispatch(loginToServer({ email, pw: password }));
  };

  return (
    <React.Fragment>
      <Box sx={boxStyle}>
        <TextField
          sx={{ margin: '10px 0px' }}
          type="text"
          fullWidth={true}
          placeholder="이메일 또는 전화번호"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField
          sx={{ margin: '10px 0px 0px' }}
          type="password"
          fullWidth={true}
          placeholder="이름(성은 제외)"
          variant="outlined"
          value={password}
          onChange={handleChangePassword}
        />

        <Button
          sx={{
            color: '#FFF',
            display: 'block',
            fontWeight: 'bold',
            fontSize: '20px',
            height: '48px',
            margin: '20px auto',
            padding: '0px 16px',
            backgroundColor: '#1877F2',
          }}
          fullWidth={true}
          type="button"
          onClick={login}
        >
          로그인
        </Button>
        <div style={{ margin: '16px 0px', textAlign: 'center' }}>
          <a
            style={{
              fontSize: '14px',
              color: '#1877F2',
              fontStyle: 'nomal',
              textDecoration: 'none',
              width: '100%',
              textAlign: 'right',
            }}
            href="/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <hr />
        <Button
          sx={{
            color: '#FFF',
            display: 'block',
            fontWeight: 'bold',
            fontSize: '17px',
            width: '147px',
            height: '48px',
            margin: '20px auto',
            padding: '0px 16px',
            backgroundColor: '#00a400',
          }}
          type="button"
          onClick={handleModal}
        >
          새 계정 만들기
        </Button>
        <Signup show={modalShow} onHide={() => setModalShow(false)} />
      </Box>
    </React.Fragment>
  );
};

export default Login;
