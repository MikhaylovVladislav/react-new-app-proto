import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.profilePage.postData.map(p => <Post message={p.postText} countLike={p.countLike}/>);

    let refTextAreaPost = React.createRef();
    let onAddPost = () => {
        props.onAddPost();
    }

    let onEditNewPostText = () => {
        let text = refTextAreaPost.current.value;
        props.onEditNewPostText(text);
    }

    return (
        <div>
            <div className={st.myPosts}>
                My posts
            </div>
            <div>
                <textarea onChange={onEditNewPostText} ref={refTextAreaPost} value={props.profilePage.editNewPost}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postElements}
        </div>

    );
}

export default MyPosts;