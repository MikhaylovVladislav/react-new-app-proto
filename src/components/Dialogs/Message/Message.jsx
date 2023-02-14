import React from 'react';
import st from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {

    return (
        <div className={st.message}>
            {props.message};
        </div>
    );
}

export default Message;