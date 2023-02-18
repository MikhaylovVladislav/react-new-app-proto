import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let postElements = props.store.getPostData().map(p=><Post message={p.postText} countLike={p.countLike}/>);
	let refTextAreaPost=React.createRef();

	let addPost =()=>{
		props.store.addPost();
	}

	let editNewPostText = ()=>{
		let text = refTextAreaPost.current.value;
		//props.editPostText(text);
		props.store.editNewPost(text);
	}

	let valueTextArea=props.store.getEditNewPost();

	return (
		<div>
			<div className={st.myPosts}>
				My posts
			</div>
			<div>
				<textarea onChange={editNewPostText} ref={refTextAreaPost} value={valueTextArea} />
				<button onClick={addPost}>Add post</button>
			</div>
			{postElements}
		</div>

	);
}

export default MyPosts;