import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie"
// 스토어에 있는 값을 가져와서 쓰게 해줌
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    console.log("aaaa", is_login)
    const dispatch = useDispatch();
    //헤더 분기를 하려면 쿠키가 필요하다. useState를 써서 만들어준다.
    // const [is_login, setIsLogin] = React.useState(false);

   

    if(is_login){
        return(
        <React.Fragment>
            <Grid is_flex="flex" padding="4px 16px">
                <Grid>
                    <Text margin="0px" bold size="24px">헬로</Text>
                </Grid>
                <Grid  is_flex="flex">
                    <Button text="내 정보"></Button>
                    <Button text="알림"></Button>
                    <Button text="로그아웃" _onClick={() => {dispatch(userActions.logOut({}))}}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
        );
    };

    return(
        <React.Fragment>
            <Grid is_flex="flex" padding="4px 16px">
                <Grid>
                    <Text margin="0px" bold size="24px">헬로</Text>
                </Grid>
                <Grid  is_flex="flex">
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
        );
    }

Header.defaultProps = {

}

export default Header;