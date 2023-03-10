import React from 'react';
import {addPostActionCreator, editNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        onAddPost: ()=> dispatch(addPostActionCreator()),
        onEditNewPostText: (text)=> dispatch(editNewPostTextActionCreator(text))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;