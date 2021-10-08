/* eslint-disable no-fallthrough */
import {db} from "../../shared/firebase"
import { collection, getDoc, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
// Actions
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";
const DELETE = "post/DELETE";
const EDIT = "post/EDIT"

// 초기 값 설정 > 페이지 뷰에 2개가 나온다.
const initialState = {
    post: [],
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

export function editPost(post) {
    return { type: EDIT, post};
}

// middlewares

//파이어베이스에서 데이터 가져오기
export const loadPostFB = () => {
    return async function (dispatch) {
        const post_data = await getDocs(collection(db, "write")); 
        // console.log("데이터내놔", post_data);

        let post = [];

        post_data.forEach((p) => {
            // console.log(m.data());
            post.push({id:p.id, ...p.data()});
        });

        // console.log("나왔냐", post);
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
    //    console.log("포스트", post_data);
       //리덕스에 등록하기, 글이 두개가 생기므로 주석처리
    //    dispatch(createPost(post_data));
    }
}
//수정
// export const editPostFB = (post) => {
//     console.log("asd", post)
//     return async (dispatch) => {
//       const docRef = doc(db, 'write', post);
//       await updateDoc(docRef, post)
//       dispatch(editPost(post));
//     }
//   }
  
export const editPostFB = (post_id = null, post = {}) => {
    return async function (dispatch){
        if(!post_id) {
            console.log("게시물 정보가 없어요");
            return;
        }
        
        const docRef = doc(db, "write", post_id);
        // console.log("ㅁㅁㅁ", docRef)
        await updateDoc(docRef, post);
        // console.log("들어왔니", post_id, post);
        // console.log("디비", )
        dispatch(editPost(post))
        
    }
}


//삭제
// export const deletePostFB = (post) => {
//     return async function (dispatch) {
//         console.log(post, "잊어야하잖아");
//         const docRef = await deleteDoc(collection(db, "write", post);
//         console.log(docRef, "잊어야하잖아2");
//         const _post = await getDoc(docRef);

//         const post_data = {id: _post.id, ...post.data()};
//         console.log('삭제하기', post_data)
//         dispatch(deletePost(post_data));
//     }
// }
//FB 삭제 
export const deletePostFB = (post) => {
    return async (dispatch, getState) => {
        const docRef = doc(db, "write", post);
        await deleteDoc(docRef);
        dispatch(deletePost(post));
    }
}





// 미들웨어 끝


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/CREATE": {
            // const new_post_list = [...state.post, action.post];
            return { post : [...state.post, action.post] };
        }
        case "post/LOAD": {
            // console.log("aa", state, action)
            return { post : action.post };
        }
        case "post/EDIT":{
            const new_post_list = state.post.map(item => {
                // console.log("MMM", state.post);
                if(item.id !== action.post.id) {
                    return item;
                }
                    return {
                    ...state.post,
                    ...action.post,
                };
            })
        } 

        case "post/DELETE":{
            let idx = state.post.findIndex((d) => d.id === action.post );
            // console.log("삭제 찍히니", idx)
            //틀림, 왜?
            //state.post.splice(idx, 1); 자체가 안먹힘
            //콘솔안찍어서 확인못한것
            // if(idx !== -1){
            //     state.post.splice(idx, 1);
            // }

            //필터 리턴 우측이 조건, 조건에 해당에하는 값만 배열로 반환
            //item은 객체, 아이템이란 이름으로 하나씩 배열로 반환
            const newPost = state.post.filter((item, index) => {
                // console.log("아이템", item)
                // console.log("인덱스", index)
                return idx !== index;
            })
            
            // console.log("스플라이스", state.post.splice(idx, 1) )
            // console.log("리듀서", state)
            return { post : newPost };
        }
        default:
            return state;
    }
}
