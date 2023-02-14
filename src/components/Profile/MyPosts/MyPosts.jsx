import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let postElements = props.pd.map(p=><Post message={p.postText} countLike={p.countLike}/>);
	return (
		<div>
			<div className={st.myPosts}>
				My posts
			</div>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			{postElements}
		</div>

	);
}

export default MyPosts;