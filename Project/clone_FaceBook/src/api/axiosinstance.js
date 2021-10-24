import axios from 'axios';

const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI;

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: ' http://3.34.255.91',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

// export default {
//   // 게시물 불러오기
//   GET: () => instance.get('/api/post/'),
//   // 게시물 작성하기
//   POST: (contents) => instance.post('/api', contents),
//   // 게시물 수정하기
//   PUT: (id, content) => instance.put(`/posts/${id}`, content),
//   // 게시물 삭제기
//   DELETE: (commentId) => instance.delete(`/api/comment/${commentId}`),
// };

//지훈 연습용
export default {
  // 게시글 불러오기
  GET: () => instance.get('/api/post/'),
  // 댓글 작성하기
  POST: (comment, postId) => instance.post(`/api/comment/${postId}`, comment),
  // 댓글 수정하기
  PUT: (commentId, comment) =>
    instance.put(`/api/comment/${commentId}`, comment),
  // 댓글 삭제기
  DELETE: (commentId) => instance.delete(`/api/comment/${commentId}`),
  // 댓글 수정
  PATCH: (commentId, comment) =>
    instance.patch(`/api/comment/${commentId}`, comment),
};
