import React from 'react';
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

 let statePage=props.store.getState().dialogsPage;
    const onAddMyMessage = () => {
        props.store.dispatch(addMyMessageActionCreator());
    }
    let onEditNewMessage = (text) => {
        props.store.dispatch(editNewMessageActionCreator(text));
    }

    let valueTA = statePage.editNewMessage;
    return ( <Dialogs statePage={statePage} onAddMyMessage={onAddMyMessage} onEditNewMessage={onEditNewMessage} valueTA={valueTA}/>);
}

export default DialogsContainer;