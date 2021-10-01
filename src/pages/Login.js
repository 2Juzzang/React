import React from "react";
import Button from "../elements/Button";
import { Text, Input, Grid } from "../elements";

const Login = (props) => {
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
        <Button></Button>
        </Grid>
        </React.Fragment>
    )
}





export default Login