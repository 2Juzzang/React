import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie"
// 스토어에 있는 값을 가져와서 쓰게 해줌
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/Firebase";
const Header = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    console.log("aaaa", is_login)
    const dispatch = useDispatch();
    //헤더 분기를 하려면 쿠키가 필요하다. useState를 써서 만들어준다.
    // const [is_login, setIsLogin] = React.useState(false);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true : false;

    console.log(is_session);
    console.log(sessionStorage.getItem(_session_key))

    if(is_login && is_session){
        return(
        <React.Fragment>
            <Grid is_flex="flex" padding="4px 16px">
                <Grid>
                    <Text margin="0px" bold size="24px">헬로</Text>
                </Grid>
                <Grid  is_flex="flex">
                    <Button text="내 정보"></Button>
                    <Button text="알림"></Button>
                    <Button text="로그아웃" _onClick={() => {
                        dispatch(userActions.logoutFB());
                        }}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Grid is_flex="flex" padding="4px 16px">
                <Grid>
                    <Text margin="0px" bold size="24px">헬로</Text>
                </Grid>
                <Grid  is_flex="flex">
                    <Button text="로그인" _onClick={()=>{
                        history.push('/login');
                    }}></Button>
                    <Button text="회원가입" _onClick={()=>{
                        history.push('/signup');
                    }}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
        );
    }

Header.defaultProps = {

}

export default Header;