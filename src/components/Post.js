import React from "react";
// import Grid from "../elements/Grid"
// import Image from "../elements/Image"
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements"

const Post = (props) => {
    
    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </ Grid>

                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>

                <Grid>
                    <Image shape="rectangle" src={props.src} />
                </Grid>

                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            <div>user profile /user name / insert_dt / is_me (edit_btn) </div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
            </ Grid>
        </React.Fragment>
    )
}

//Props가 없을 때 생기는 오류를 막아줌
Post.defaultProps = {
    user_info :  {
        user_name : "hoon",
        user_profile : "https://images.velog.io/images/2_juzzang/post/b11582cc-9e47-4db2-9982-a80a97c06c12/0e591dbc52cf7697b6ecd779955f715b.jpg"
    },
    image_url : "https://images.velog.io/images/2_juzzang/post/b11582cc-9e47-4db2-9982-a80a97c06c12/0e591dbc52cf7697b6ecd779955f715b.jpg",
    contents: "빈지노",
    comment_cnt: 10,
    insert_dt: "2021-09-30 14:50:00"
}

export default Post;