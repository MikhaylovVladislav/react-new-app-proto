import React from 'react';
import st from './Profile.module.css';
import matrica from './../../images/matrica.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div>
			<div>
				<img src={matrica} className={st.cover} />
			</div>
			<div className={st.general}>
				<div className={st.ava}>
					<img src='https://cs14.pikabu.ru/post_img/big/2021/11/29/12/1638219290191444162.jpg' />
				</div>
				<div className={st.info}>
					<div className={st.FIO}>Koshkin Boris</div>
					<div>Date of Birth: 16 october</div>
					<div>Education: USATU</div>
					<div>Amount battle of WOT:blitz: 4983</div>
				</div>
			</div>
			<MyPosts />

		</div>
	);
}

export default Profile;