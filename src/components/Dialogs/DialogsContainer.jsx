import React from 'react';
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps=(dispatch)=> {
    return {
        onEditNewMessage: (text)=>{dispatch(editNewMessageActionCreator(text))},
        onAddMyMessage: ()=> {dispatch(addMyMessageActionCreator())}
}
}

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;