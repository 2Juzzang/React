import {db} from "../../shared/firebase"
import { collection, getDoc, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
// Actions
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";
const DELETE = "post/DELETE";

// 초기 값 설정 > 페이지 뷰에 2개가 나온다.
const initialState = {
    post: [
        { contents:'글작성하기' },
        { contents:'글작성하기2'}
    ],
}; 
// 홈 loadPostFB > 미들웨어 > 액션생성함수 > 리듀서 > 스토어에 저장 (새로운 state)
//Action creators
export function loadPost(post) {
    return { type: LOAD, post };
}

export function createPost(post) {
    // console.log("액션을 생성할거야!");
    return { type: CREATE, post};
}

export function deletePost(post) {
    return { type: DELETE, post};
    
}


// middlewares

//파이어베이스에서 데이터 가져오기
export const loadPostFB = () => {
    return async function (dispatch) {
        const post_data = await getDocs(collection(db, "write")); 
        console.log("데이터내놔", post_data);

        let post = [];

        post_data.forEach((p) => {
            // console.log(m.data());
            post.push({id:p.id, ...p.data()});
        });

        console.log("나왔냐", post);
        dispatch(loadPost(post));
    }
}

//데이터 등록하기
export const addPostFB = (post) => {
// 미들웨어에선 함수를 리턴, 파라미터로는 dispatch를 받음
    return async function (dispatch) {
// 추가한 정보는 docRef에 담음
// 비동기에선 async, await를 세트로 사용
       const docRef = await addDoc(collection(db, "write"), post );
       const _post = await getDoc(docRef);
    //    추가하는 데이터
       const post_data = {id: _post.id, ..._post.data()};
       console.log("포스트", post_data);
       //리덕스에 등록하기
       dispatch(createPost(post_data));
    }
}

//삭제
export const deletePostFB = (post) => {
    return async function (dispatch) {
        console.log(post, "잊어야하잖아");
        const docRef = await deleteDoc(collection(db, "write"), post);
        console.log(docRef, "잊어야하잖아2");
        const _post = await getDoc(docRef);

        const post_data = {id: _post.id, ...post.data()};
        console.log('삭제하기', post_data)
        dispatch(deletePost(post_data));
    }
}

// 미들웨어 끝


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // 위에 선언한 CREATE로 써줘도 된다 당연히ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ
        case "post/CREATE": {
            // console.log("이제 값을 바꿀거야!");
            const new_post_list = [...state.post, action.post];
            return { post : new_post_list };
        }
        case "post/LOAD": {
            console.log("aa", state, action)
            return { post : action.post };
        }
        case "post/DELETE":{
            let idx = state.post.findIndex((d) => d.id === action.post );
            console.log("삭제 찍히니", idx)
            if(idx !== -1){
                state.post.splice(idx, 1);
            }

            return { post : state.post };
        }
        default:
            return state;
    }
}
