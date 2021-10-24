import { produce } from 'immer';
import axios from 'axios';
import { saveToken } from '../../utills/auth';
import { history } from '../configStore';
import { removeToken } from '../../utills/auth';

export const LOGIN = 'user/LOGIN';
export const LOG_OUT = 'user/LOG_OUT';
export const AUTHORIZED = 'user/AUTHORIZED';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logOut = () => ({ type: LOG_OUT });


const initialState = {
  email: '',
  userName: '',
  isAuthorized: false,
};

// 미들 웨어
const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI

export const loginToServer = (loginInfo) => async (dispatch) => {
  try {
    console.log(loginInfo);
    const res = await axios.post(`${baseURL}/api/login`, loginInfo, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
      },
    });
    const { data } = res;

    if (data.result === 'fail') {
      return data;
    }
    console.log(data);
    dispatch(login({ email: data.email, userName: data.userName }));

    console.log(data?.token);
    saveToken(data?.token);
    history.replace('/');

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};


export const signUpToServer = (userInfo) => async (dispatch) => {
  console.log(userInfo);

  const res = await axios.post(`${baseURL}/api/signup`, userInfo, {
    headers: {
      'content-type':
        'multipart/form-data; boundary=<calculated when request is sent>',
    },
  });
  console.log(res);
};


export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN: {
        console.log('LOGIN');

        draft.email = action.payload.email
        draft.userName = action.payload.userName
        draft.isAuthorized = true
        break;
      }
      case LOG_OUT: {
        console.log('LOG_OUT');
        console.log(action.payload);
        
        
        draft.email = '';
        draft.userName = '';
        draft.isAuthorized = false;
        break;
      }
      default:
        break;
    }
  });
}
