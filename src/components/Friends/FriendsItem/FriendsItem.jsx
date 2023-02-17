import React from 'react';
import st from './../Friends.module.css';



const FriendsItem = (props) => {

    return (
        <div className={st.friendsItem}>
            <div className={st.ava}>
                <img src='https://www.tulazoo.ru/media/k2/items/cache/ea82697ed9755e975f3c7d735db2070c_M.jpg'/>
            </div>
            <div className={st.name}>
                {props.fName}
            </div>
        </div>
    );
}

export default FriendsItem;