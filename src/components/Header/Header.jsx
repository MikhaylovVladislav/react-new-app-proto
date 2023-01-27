import React from 'react';
import st from './Header.module.css';
import logo from './../../images/universe_logo.png';

const Header = ()=>{
	return (
		<header className={st.header}>
			<img src={logo} />
		</header>
	);
}

export default Header;