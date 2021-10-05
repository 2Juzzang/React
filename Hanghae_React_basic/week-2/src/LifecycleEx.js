import React from "react";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
// extends > 자식 클래스가 부모 클래스를 가져오는 것 여기서 React.Component는 부모 클래스의 이름
class LifecycleEx extends React.Component {

// 생성자 함수 - 1
constructor(props) {  /* 초기값 설정 */
super(props);

this.state = {  /* 컴포넌트의 데이터를 넣어줌 */
cat_name: '나비',
};

console.log('in constructor!');
}

changeCatName = () => {
// 다음 강의에서 배울, state 업데이트 하는 방법입니다!
// 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
//setStats는 컴포넌트 자체의 데이터를 바꾸는 것
this.setState({cat_name: '바둑이'});

console.log('고양이 이름을 바꾼다! - ㄴ ');
}

// 마운트는 맨 처음 화면에 띄워줄 때에만 콘솔에 찍히고 끝, 콘솔에도 화면에 나타난 이후로는 콘솔이 찍히지 않는다. 
// 실제 돔에 올라간 상태 - 3
componentDidMount(){  
console.log('in componentDidMount! - 실제 돔에 올라감');
}

componentDidUpdate(prevProps, prevState){   /* 마운트와 같이 가상돔이 실제 돔으로 올라간(업데이트가 끝난) 상태 > 돔관련 처리 가능 */
console.log(prevProps, prevState);  /* 이전의 props와 state */
console.log('in componentDidUpdate! - 데이터 업데이트가 끝남, 리렌더링이 끝나면 호출이 되는 라이프 사이클 메서드 함수 - ㄹ'); 
}

// 컴포넌트가 화면에서 사라지기 직전 호출되는 함수
componentWillUnmount(){
console.log('in componentWillUnmount!');
}

// 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다! - 2
render() {

console.log('in render!');

return (
<div>
{/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있습니다. */}
<h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1> {/* 캣 네임을 바꿔줬음 >> 가상돔에서 진짜 돔으로 렌더링 -ㄷ*/}
<button onClick={this.changeCatName}>고양이 이름 바꾸기</button>  {/* 버튼 누르면 -ㄱ */}
</div>
);
}
}

export default LifecycleEx;