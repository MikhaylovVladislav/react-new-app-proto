import React from 'react';
import st from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";



const Friends = (props) => {
    console.log(props.state);
    const friendsItem = props.state.map(el => el.online ? <FriendsItem fName={el.name +" online"} online={el.online}/> : <FriendsItem fName={el.name } online={el.online} />);
    return (
        <div className={st.friends}>
            {friendsItem}
        </div>
    );
}

export default Friends;