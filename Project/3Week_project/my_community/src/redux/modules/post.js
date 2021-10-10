/* eslint-disable no-fallthrough */
import {db} from "../../shared/firebase"
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
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

//파이어베이스에서 데이터 불러오기
export const loadPostFB = () => {
    return async function (dispatch) {
        // await는 async 함수 내부에서만 사용이 가능하다.
        // 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙인다.
        // 여기서 await의 오른쪽에는 반드시 promise( = 비동기 처리를 위한 객체)가 와야하고 이 작업이 끝날 때까지 기다리게 된다.
        const post_data = await getDocs(collection(db, "write")); 
        // console.log("프로미스 >>", getDocs(collection(db, "write")))
        // console.log("write db에 있는 데이터", post_data);

        let post = [];

        post_data.forEach((p) => {
            // 빈 객체에 id와 컨텐츠(글)를 넣어줌 
            post.push({id:p.id, ...p.data()});
        });

        // console.log("디스패치하는 데이터", post);
        dispatch(loadPost(post));
    }
}

//FB에 데이터 등록하기
export const addPostFB = (post) => {
// 미들웨어에선 함수를 리턴, 파라미터로는 dispatch를 받음
    return async function (/* dispatch */) {
// 추가한 정보는 docRef에 담음
// 비동기에선 async, await를 세트로 사용
       /* const docRef =  */await addDoc(collection(db, "write"), post );
    //    const _post = await getDoc(docRef);
    //    _post.data()에는 작성한 contetns 객체가 담긴다.
    //    추가하는 데이터
    //    const post_data = {id: _post.id, ..._post.data()};
    //    console.log("포스트", post_data);


    //리덕스에 등록하기, 글이 두개가 생기므로 주석처리
    //    dispatch(createPost(post_data));
    }
}
//수정
// post_id의 기본값은 null, post의 기본값은 빈 객체
export const editPostFB = (post_id = null, post = {}) => {
    return async function (dispatch){
        // FB에서 받아오는 post_id가 없다면 
        if(!post_id) {
            console.log("게시물 정보가 없어요");
            return;
        }

        // post_id가 있다면
        // FB db의 write의 post의id를 docRef라는 상수로 지정
        const docRef = doc(db, "write", post_id);
        // post를 업데이트!
        await updateDoc(docRef, post);
        
        // editpost를 디스패치
        dispatch(editPost(post))
    }
}


//FB 삭제 
// 삭제하기 - 2, 각 카드의 인덱스에 해당하는 id값을 넘겨 받음
export const deletePostFB = (post) => {
    return async (dispatch) => {
        // 내려받은 id값이 있는 문서를 상수로 저장
        const docRef = doc(db, "write", post);
        // 위의 문서 삭제가 끝나면 삭제 액션을 디스패치
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
            return { post : action.post };
            // 이 과정을 거치면 initialState의 post( 빈 배열 )에 { post : action.post} 가 담기고 이걸 map을 통해 뷰에 나타냄
        }
        case "post/EDIT":{
            state.post.map(item => {
                // map으로 돌렸기 때문에 포스트의 개수만큼 콘솔이 찍힌다.
                // console.log("MMM2", state.post);
                // 각 컨텐츠의 id가 디스패치를 통해 받은 값의 id와 같지 않다면
                if(item.id !== action.post.id) {
                    // item을 리턴 item은 객체 하나하나를 담은 값 
                    return item;
                }
                /**
                 * @author hoon
                 */
                // 아니라면 
                    return {
                    ...state.post,
                    ...action.post,
                };
            })
        } 

        //삭제 - 3
        case "post/DELETE":{
            // index값을 찾아줘~
            let idx = state.post.findIndex((d) => d.id === action.post );
            // console.log("삭제 찍히니", idx)
            //틀림, 왜?
            //state.post.splice(idx, 1); 자체가 안먹힘
            // splice는 원본 배열을 바꾸므로 immer를 사용하지 않으면 불변성이 지켜지지않게 되므로 사용X
            // 근데 immer 쓰면 됨 
            //콘솔안찍어서 확인못한것
            // if(idx !== -1){
            //     state.post.splice(idx, 1);
            // }

            //필터 > return 우측이 조건, 조건에 해당에하는 값만 배열로 반환
            //item은 객체형태로 이루어짐 > item이란 이름으로 하나씩 배열로 반환
            const newPost = state.post.filter((item, index) => {
                // console.log("item", item)
                // console.log("인덱스", index)
                return idx !== index;
            })

            // 삭제는 변수로 지정해준 idx와 index가 같아야 한다. 
            // 그래야 조건에 맞지 않아 새로운 배열로 반환되지 않는다. 그럼 당연히 뷰에 나타나지 않음.
            // 필터를 이용한 삭제 방법은 이를 이용한 것
            
            // 왜? >> 필터는 조건에 해당하는 값만을 새로운 배열로 반환하는데,
            // 선택한 카드의 index 와 삭제를 하지 않은 다른 카드들의 index는 조건(!==)에 맞아(true)
            // 새로운 배열로 반환되고 load를 통해 뷰에 나타나게 된다.

            // 필터는 조건에 해당하는 값을 새로운 배열로 반환한다. 하지만 리듀서는 원본 배열을 직접 바꾸면 안되므로
            // 필터로 걸러준 값을 newPost에 담아서 이를 다시 post에 담는다.
            
            return { post : newPost };
        }
        default:
            return state;
    }
}
