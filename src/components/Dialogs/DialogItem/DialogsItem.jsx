import React from 'react';
import st from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return (
        <div className={st.dialog + ' ' + st.active}>
            <NavLink to={'/dialogs/' + props.dId}> {props.dName} </NavLink>
        </div>
    );
}

export default DialogItem;