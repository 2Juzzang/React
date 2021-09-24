import React from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {deleteBucket, updateBucket} from './redux/modules/bucket'
const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list)
    console.log(bucket_list);
    console.log(bucket_index);
    // console.log();
    return(
        <div>
        <h1>{bucket_list[bucket_index].text}</h1>
        <button onClick={() => {
            dispatch(updateBucket(bucket_index));
        }}>완료하기</button>
        <button onClick={() =>{
            console.log('삭제')
            dispatch(deleteBucket(bucket_index));
            history.goBack();
        }}>삭제하기</button>
        </div>
            
    );
}

export default Detail