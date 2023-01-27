import React from 'react';
import st from './Post.module.css';

const Post = (props) => {
	return (
		<div className={st.post}>
			<div className={st.item}>
				<img src='https://bipbap.ru/wp-content/uploads/2015/10/g_14520ae7572c6861f5cd44a4190f6fba_2_478x500.jpg' />
				{props.message}
			</div>
			<div>
				<span>
					{props.countLike} like
				</span>
			</div>
		</div>
	);
}

export default Post;