import {db} from "../../firebase"
import { collection, getDoc, getDocs, addDoc, updatedoc, doc } from "firebase/firestore";
// Actions
const CREATE = "song/CREATE";
const LOAD = "song/LOAD";

// 초기 값 설정 > 페이지 뷰에 3개가 나온다.
const initialState = {
    list: [
        { song: '광대', artist: '리쌍', link: '없어요', desc: '내가 웃고있나요' },
        { song: '룩셈부르크크크크', artist: '크라잉넛', link: '아', desc: '르헨티나' }, 
        { song: 'zxczxc크', artist: '크asdasd넛', link: '아asd', desc: 'asd' } 
    ],
};

//Action creators 액션 생성함수를 만들고 내보내기
export function loadMusic(music){
    return {type: LOAD, music}
}
export function createCard(song) {
    //액션을 생성
    return { type: CREATE, song};
}


// middlewares

//파이어베이스에서 데이터 가져오기
export const loadMusicFB = () => {
    return async function (dispatch) {
        const music_data = await getDocs(collection(db, "music")); 
        // console.log(music_data);

        let music = [];
        music_data.forEach((m) => {
            // console.log(m.data());
            music.push({id:m.id, ...m.data()});
        });

        // console.log(music);
        dispatch(loadMusic(music));
        // console.log(dispatch(loadMusic(music)))
    }
}
//데이터 등록하기
// song은 AddCard에서 createCard 부분의 인자 song
export const addMusicFB = (song) => {
// 미들웨어에선 함수를 리턴, 파라미터로는 dispatch를 받음
    return async function (dispatch) {
// 추가한 정보는 docRef에 담음
// 비동기에선 async, await를 세트로 사용
       const docRef = await addDoc(collection(db, "music"), song );
       const _song = await getDoc(docRef);
    //    추가하는 데이터
       const song_data = {id: _song.id, ..._song.data()};
       console.log(song_data);
       dispatch(createCard(song_data));
    }
}
// AddCard에서 사용한다.


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // 위에 선언한 CREATE로 써줘도 된다 당연히ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ
        case "song/CREATE": {
            console.log("이제 값을 바꿀거야!");
            const new_song_list = [...state.list, action.song];
            return { list: new_song_list };
        }
        case "song/LOAD": {
            return {list: action.music};
        }
        default:
            return state;
    }
}