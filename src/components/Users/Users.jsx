import React from "react";
import st from "./Users.module.css";
import userPhoto from "../../Assets/Images/User.png";
import {NavLink} from "react-router-dom";
import {UserFollowAPI} from '../../API/API'
let Users = (props)=>{

    let countPage=Math.ceil(props.totalCount/props.pageSize);
    let pages=[];
    for(let i=1; i<= countPage ;i++){
        if(i<47) {
            pages.push(i);
        }
    }
    return ( <div>
        <div>{pages.map(p=><span onClick={()=>props.onChangePage(p) } className={props.currentPage===p ? st.selectedPage:st.unselectedPage} > {p} </span>)}</div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <div><NavLink to={'/profile/'+u.id}><img className={st.avaPhoto} src={u.photos.small==null ? userPhoto : u.photos.small }></img></NavLink></div>
                <div>
                    {!u.followed ? <button disabled={props.isFollowing.some((id)=> id===u.id)} onClick={()=>{
                        props.toggleFollowingProgress(true, u.id)
                        UserFollowAPI.follow(u.id)
                            .then(data => {props.toggleFollowingProgress(false, u.id)
                                props.follow(u.id)})

                    }
                    }> Unfollow</button> : <button disabled={props.isFollowing.some((id)=> id===u.id)} onClick={()=>{
                        props.toggleFollowingProgress(true, u.id)

                        UserFollowAPI.unFollow(u.id)
                            .then(data => {props.toggleFollowingProgress(false, u.id)
                                props.unfollow(u.id)
                                })
                        }}> Follow</button>
                    }

                </div>
            </div>
            <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.followed}</div>
            </div>
        </div>)}
    </div>)



}
export default Users
