import React from 'react';
import {addMyMessageAC} from "../../redux/dialogs-reducer";
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
        onAddMyMessage: (text)=> {dispatch(addMyMessageAC(text))}
}
}


export default compose(
    WithAuthNavigate,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)