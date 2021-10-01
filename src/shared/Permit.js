import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./Firebase";

const Permit = (props) => {
    const user_info = useSelector(state => state.user.user);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true :false;

    if(is_session && user_info) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    return null;
};

export default Permit;