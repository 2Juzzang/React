import React from "react";
import { useHistory } from "react-router-dom";
const Dog = (props) => {
    const history = useHistory();
    console.log(history);
    return (
        <div onClick={() => {
            history.push("/Cat");
        }}>
            Dog화면 입니다!
        </div>
    );
};

export default Dog;