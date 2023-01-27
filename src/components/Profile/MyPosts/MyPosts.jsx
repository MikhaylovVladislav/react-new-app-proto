import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div >
			<div className={st.myPosts}>
				My posts
			</div>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<Post message='Excuse me bro' countLike='27'/>
			<Post message='Excuse ... i am not you bro' countLike='19'/>

		</div>

	);
}

export default MyPosts;