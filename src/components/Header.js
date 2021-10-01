import React from "react";
import { Grid, Text, Button } from "../elements";

const Header = () => {
    return(
        <React.Fragment>
            <Grid is_flex="flex" padding="4px 16px">
                <Grid>
                    <Text margin="0px" bold size="24px">헬로</Text>
                </Grid>
                <Grid  is_flex="flex">
                    <Button text="로그인" margin="0 16px"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {

}

export default Header;