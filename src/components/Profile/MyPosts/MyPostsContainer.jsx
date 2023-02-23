import React from 'react';
import {addPostActionCreator, editNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let statePage = props.store.getState().profilePage;

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onEditNewPostText = (text) => {
        let action = editNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let valueTA = statePage.editNewPost;

    return (
        <MyPosts statePage={statePage} onAddPost={onAddPost} onEditNewPostText={onEditNewPostText} valueTA={valueTA}/>);
}

export default MyPostsContainer;