import React from "react";
import styled from "styled-components";
const Button = (props) => {
    const {text, _onClick, bgColor, margin} = props
    const styles = {
        text: text,
        bgColor: bgColor,
        margin: margin,
    }
    return(
        <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
            {text}
        </BtnBox>
        </React.Fragment>
    );
}

const BtnBox = styled.button`
    ${(props) => (props.bgColor ? `background-color: ${props.bgColor};` : "")};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
    width: 100%;
    color: white;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
`;

Button.defaultProps = {
    margin: false,
    text: "로그인하기",
    bgColor: "black",
    _onClick:() => {console.log("login")}
}

export default Button;
