import React from 'react';
import st from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return (
        /*<div className={st.dialog + ' ' + st.active}>   </div>*/
        <div className={st.item}>
            <div className={st.ava}><img
                src='https://www.agroinvestor.ru/upload/iblock/bc7/bc72c99459222e46192cfb719e1e578a.jpg'/>
            </div>
            <div className={st.nickName}>
                <NavLink to={'/dialogs/' + props.dId}> {props.dName} </NavLink>
            </div>
        </div>

    );
}

export default DialogItem;