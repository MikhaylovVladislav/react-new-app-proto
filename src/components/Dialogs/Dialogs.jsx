import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    const dialoges = props.dD.map(el => <DialogsItem dName={el.name} dId={el.id}/>);
    const messages = props.mD.map(el => <Message message={el.messageText}/>);
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItem}>
                {dialoges}
            </div>
            <div className={st.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;