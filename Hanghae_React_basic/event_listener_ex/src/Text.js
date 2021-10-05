import React, { Component } from "react";

const Text = (props) => {
const text = React.useRef(null);


const hoverEvent = () => {
    text.current.style.background = "yellow";
}

React.useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);

    // 컴포넌트가 사라지는 위치 즉, ComponentWillUnmount 의 역할은 return이 해준다
    return () => {
        text.current.removeEventListener("mouseover", hoverEvent);
    }
}, []);
return (
<h1 ref={text}>텍스트입니다!</h1>
)
}

export default Text;