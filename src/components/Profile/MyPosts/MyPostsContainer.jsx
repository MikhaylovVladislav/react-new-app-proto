import React from 'react';
import {addPostActionCreator, editNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
   /* let statePage = props.store.getState().profilePage;

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onEditNewPostText = (text) => {
        let action = editNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let valueTA = statePage.editNewPost;*/

    return (<StoreContext.Consumer>
            { (store) => {
                    let statePage = store.getState().profilePage;

                    let onAddPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onEditNewPostText = (text) => {
                        let action = editNewPostTextActionCreator(text);
                       store.dispatch(action);
                    }

                    let valueTA = statePage.editNewPost;
                   return (<MyPosts statePage={statePage} onAddPost={onAddPost} onEditNewPostText={onEditNewPostText}
                             valueTA={valueTA}/>)


            }}
        </StoreContext.Consumer>)


}
export default MyPostsContainer;