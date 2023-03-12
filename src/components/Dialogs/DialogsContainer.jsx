import React from 'react';
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthNavigate} from "../../HOC/WithAuthNavigate";

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


export default WithAuthNavigate(connect(mapStateToProps, mapDispatchToProps)(Dialogs));