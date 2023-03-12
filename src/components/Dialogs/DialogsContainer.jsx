import React from 'react';
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthNavigate} from "../../HOC/WithAuthNavigate";
import {compose} from "redux";

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


export default compose(
    WithAuthNavigate,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)