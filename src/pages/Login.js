import React from "react";
import Button from "../elements/Button";
import { Text, Input, Grid } from "../elements";
import { setCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
    const dispatch = useDispatch();
    
    const login = () => {
        dispatch(userActions.loginAction({user_name:'perl'}));
        


        // setCookie("user_id", "hoon", 3);
        // setCookie("user_pwd", "ppp", 3);
    }

    return(
        <React.Fragment>
        <Grid padding="16px 16px">
            <Text size="32px" bold>로그인</Text>
        <Input label="아이디" placeholder="아이디를 입력해주세요" margin="0px"></Input>
        </Grid>
        <Grid padding="16px 16px">
        <Input label="비밀번호" placeholder="비밀번호를 입력해주세요"></Input>
        </Grid>
        <Grid padding="0px 16px">
        <Button _onClick={()=>{login();}}></Button>
        </Grid>
        </React.Fragment>
    )
}





export default Login