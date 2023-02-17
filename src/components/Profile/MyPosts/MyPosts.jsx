import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let postElements = props.pD.postData.map(p=><Post message={p.postText} countLike={p.countLike}/>);
	let refTextAreaPost=React.createRef();

	let addPost =()=>{
		props.addPost();
	}

	let editNewPostText = ()=>{
		let text = refTextAreaPost.current.value;
		props.editPostText(text);
	}

	return (
		<div>
			<div className={st.myPosts}>
				My posts
			</div>
			<div>
				<textarea onChange={editNewPostText} ref={refTextAreaPost} value={props.pD.editNewPost} />
				<button onClick={addPost}>Add post</button>
			</div>
			{postElements}
		</div>

	);
}

export default MyPosts;