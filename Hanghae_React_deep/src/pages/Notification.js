import React from "react";
import {Grid} from "../elements";
import Card from "../components/Card";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const Notification = (props) => {
  //댓글 알림 9, 유저 정보를 가져온다.
  const user = useSelector(state => state.user.user);
  //state로 관리
  const [noti, setNoti] = React.useState([]);

  React.useEffect(() => {
    // 유저 정보가 없다면 리턴
    console.log("유즈이펙트")
    if(!user){
      return;
    }  
    // 유저정보가 있다면 
    const notiDB = realtime.ref(`noti/${user.uid}/list`);
    console.log("노티22", notiDB)
    // realtime DB에는 orderBy가 없어서 다른 정렬 함수인 orderByChild를 사용
    // realtime DB는 내림차순을 지원하지 않음 >> 일단 데이터를 가져와서 자바스크립트로 역순으로 정렬!
    const _noti = notiDB.orderByChild("insert_dt");
    // 데이터를 가져온다. 뭔가를 구독하지 않기 때문에 once를 사용
    _noti.once("value", snapshot => {
      console.log(snapshot.exists(), "스냅샷")
      // 만약 snapshot 데이터가 있으면
      if(snapshot.exists()){
        console.log("222222222")
        //댓글 알림 10, 데이터를 객체로 가져옴 > 객체의 키 값 추출 후 역순으로 정렬
        let _data = snapshot.val();
        console.log("asd", _data)
      
        //댓글 알림 11, reverse()는 [1,2,3,4,5] >> [5,4,3,2,1] (역순으로) 정렬한다.
        let _noti_list = Object.keys(_data).reverse().map(s => {
          return _data[s];
        })
        console.log(_noti_list)
        // 12번의 빈 배열에 _noti_list 추가 
        setNoti(_noti_list)
      }
    })
  }, [user]);

    return (
      <React.Fragment>
        <Grid padding="16px" bg="#EFF6FF">
            {noti.map((n, idx) => {
              console.log("n", n)
                return <Card key={`noti_${idx}`} {...n}/>;
            })}
        </Grid>
      </React.Fragment>
    );
}

export default Notification;
