import React from "react";
import { Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications"
// 댓글 알림
import {realtime}  from "../shared/firebase";
// 댓글 알림 3, 유저 id 가져오기 위한 import
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
    const user_id = useSelector(state => state.user.user.uid);
    const [is_read, setIsRead] = React.useState(true);
    const notiCheck = () => {
        // 댓글 알림 6, noti 아이콘 눌렀을 시 읽음처리
        const notiDB = realtime.ref(`noti/${user_id}`);
        notiDB.update({read:true})
        props._onClick();
    };

    // 댓글 알림 2, 리스너 구독
    React.useEffect(() => {
        const notiDB = realtime.ref(`noti/${user_id}`)
        
        notiDB.on("value", (snapshot) => {
            console.log("스냅", snapshot.val());
        // 댓글 알림 4, read가 true면 읽음처리 false면 안읽음(빨간불) 처리, boolean값으로 뱃지를 on, off!
            setIsRead(snapshot.val().read);
        });
        //구독해제는 return으로
        return () => notiDB.off();
    }, []);
    return(
        <React.Fragment>
           <Badge color="secondary" variant="dot" invisible={is_read} onClick={notiCheck}>
                <NotificationsIcon/>
            </Badge>    
        </React.Fragment>
    );
}

NotiBadge.defaultProps = {
    _onClick: () => {

    }
};

export default NotiBadge;