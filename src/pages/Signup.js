import React from "react";
import { Grid, Text, Input, Button } from "../elements";

const Signup = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>회원가입</Text>
                <Input label="아이디" placeholder="아이디를 입력해주세요" margin="0px"></Input>
            </Grid>
            <Grid padding="16px 16px">
                <Input label="닉네임" placeholder="닉네임을 입력해주세요"></Input>
            </Grid>
            <Grid padding="16px 16px">
                <Input label="비밀번호" placeholder="비밀번호를 입력해주세요"></Input>
            </Grid>
            <Grid padding="16px 16px">
                <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요"></Input>
            </Grid>
            <Grid padding="0px 16px">
            <Button text="회원가입 하기"></Button>
            </Grid>
        </React.Fragment>
    );
}

Signup.defalutProps = {

}

export default Signup;