import React from 'react';
import st from './Header.module.css';
import logo from './../../images/universe_logo.png';
import {NavLink} from "react-router-dom";


const Header = (props)=>{
	return (
		<header className={st.header}>
			<img src={logo} />
			<div>
				{!props.isAuth ? <NavLink to={'/login'}>Login</NavLink>:<div> <button onClick={props.toLoginOut}>Выйти</button> <NavLink to={'/profile/'+props.authId}>{props.login} </NavLink> <div>
					 </div></div> }


			</div>
		</header>
	);
}

export default Header;