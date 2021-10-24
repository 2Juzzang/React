import { CountertopsOutlined } from '@mui/icons-material';
import { produce } from 'immer';
import axiosinstance from '../../api/axiosinstance';
import T from '../../api/tokenInstance';
//posts
const LOAD_POST_LIST = 'posts/LOAD_POST_LIST';
const LOAD_CURRENT_POST = 'posts/LOAD_CURRENT_POST';
const CREATE = 'posts/CREATE';
const UPDATE = 'posts/UPDATE';
const DELETE = 'posts/DELETE';
const LIKE_POST = 'posts/LIKE';
//comment
const ADD_COMMENT = 'posts/ADD_COMMENT';
const MODIFY_COMMENT = 'posts/MODIFY_COMMENT';
const REMOVE_COMMENT = 'posts/REMOVE_COMMENT';

//action creater

const loadPosts = (postList) => ({
  type: LOAD_POST_LIST,
  payload: postList,
});

const loadCurrentPost = (postId, data) => ({
  type: LOAD_CURRENT_POST,
  payload: { postId, data },
});

const likeToPost = (Like) => ({
  type: LIKE_POST,
  payload: Like,
});

const createPost = (content) => ({
  type: CREATE,
  payload: content,
});

const updatePost = (updatedPost) => ({
  type: UPDATE,
  payload: updatedPost,
});

const deletePost = (postId) => ({
  type: DELETE,
  payload: postId,
});

export const addCommentToPost = (comment, postId) => ({
  type: ADD_COMMENT,
  payload: comment,
  postId,
});

export const modifyCommentToPost = (commentId, comment) => ({
  type: MODIFY_COMMENT,
  payload: { commentId, comment },
});

export const removeCommentToPost = (commentId) => ({
  type: REMOVE_COMMENT,
  payload: commentId,
});

// in postsReducer, initialState
// const initialPostState = {
//   postList: [
//     {
//       // 민국님
//       id: 'postId',
//       content: 'content',
//       userName: 'userName',
//       insertDt: 'insertDt',
//       profile: 'profile',
//       image: 'image',
//       // 지훈님
//       comment: [
//         {
//           id: 'commnetId',
//           comment: 'comment',
//           userName: 'userName',
//           insertDt: 'insertDt',
//           profile: 'profile',
//         },
//       ],
//       commentCnt: 'commentCnt',
//       likeCnt: 'likeCnt',
//     },
//   ],
// };

const initialState = {
  postList: [],
  current: {},
};

const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI;

export const addContentToAxios = (content) => async (dispatch) => {
  console.log('콘텐트추가', content);
  try {
    const { data } = await T.POST('/post', { content });
    console.log('콘텐트데이터', data);
  } catch (error) {
    console.error(error);
  }
  dispatch(createPost(content));
};

export const deleteContentToAxios = (postId) => async (dispatch) => {
  console.log('포스트삭제아디', postId);
  try {
    const { data } = T.DELETE(`/post/${postId}`);
    if (data.result === '게시글이 삭제되었습니다!') {
      dispatch(deletePost(postId));
    }
  } catch (error) {
  }
};

export const addCommentToAxios = (comment, postId) => async (dispatch) => {
  try {
    const { data } = await T.POST(`/comment/${postId}`, comment);
  } catch (error) {
    console.error(error);
  }
  dispatch(addCommentToPost(comment, postId));
};

export const likeToAxios = (Like) => async (dispatch) => {
  try {
    const { data } = await T.POST(`/like`, Like);
    dispatch(likeToPost(Like));
  } catch (error) {
    console.error(error);
  }
};

// 게시글 리스트 로드
export const loadPostsToAxios = () => async (dispatch) => {
  try {
    const res = await T.GET('/post');

    dispatch(loadPosts(res.data));
  } catch (error) {
    console.error(error);
  }
};

export const loadCurrentPostToAxios = (postId) => async (dispatch) => {
  try {
    const { data } = await T.GET();
    dispatch(loadCurrentPost(Number(postId), data));
  } catch (error) {
    console.error(error);
  }
};

export const updatePostToAxios = (postId, content) => async (dispatch) => {
  try {
    const { data } = await T.PATCH(`/post/${postId}`, content);
    dispatch(updatePost(data))
  } catch (error) {
    console.error(error);
  }
};

export const modifyCommentToAxios =
  (commentId, comment) => async (dispatch) => {
    try {
      const { data } = await T.PATCH(`/comment/${commentId}`, comment);
      if (data.result === 'success') {
        dispatch(modifyCommentToPost(commentId, data.comment));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const removeCommentToAxios = (commentId) => async (dispatch) => {
  try {
    const { data } = await T.DELETE(`/comment/${commentId}`);
    if (data.result === 'success') {
      dispatch(removeCommentToPost(commentId));
    }
  } catch (error) {
    console.log(error);
  }
};

export default function postsReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_LIST: {
        //게시글 리스트 로드
        draft.postList = action.payload.posts;
        break;
      }
      case LOAD_CURRENT_POST: {
        const idx = action.payload.data.posts.findIndex(
          (d) => d.postId === action.payload.postId,
        );
        const commentList = action.payload.data.posts[idx].comment;
        return draft.postList.push(commentList);
      }
      case CREATE: {
        break;
      }
      case UPDATE: {
        let idx = draft.postList.findIndex((p) => p.postId === action.payload.post.postId)
        draft.postList[idx] = action.payload.post

        break;
      }
      case DELETE: {
        //리덕스 삭제
        const newContent = draft.postList.filter((a) => {
          return a.id !== action.payload;
        });
        return { postList: newContent };
      }
      case LIKE_POST: {
        console.log('좋아요', action.payload);

        break;
      }
      case ADD_COMMENT: {
        console.log('댓글 추가', action.payload);
        break;
      }
      case MODIFY_COMMENT: {
        console.log('수정한 댓글', action.payload);
        const commentId = action.payload.commentId;
        const newComment = action.payload.comment;
        // console.log('포스트리스트', state.postList);
        // 파인드 인덱스 돌려서 각 포스트 중 조건에 맞는 객체만 출력
        const list = state.postList;
        const list2 = list.findIndex((a) => {
          return a.postId === commentId;
        });
        console.log('리스트', list);
        console.log('리스트2', list2);
        break;
      }
      case REMOVE_COMMENT: {
        //리덕스에서 삭제
        const newComment = draft.postList.filter((a) => {
          return a.id !== action.payload;
        });
        return { postList: newComment };
      }
      default:
        break;
    }
  });
}
