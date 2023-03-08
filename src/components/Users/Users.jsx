import React from "react";
import st from "./Users.module.css";
import userPhoto from "../../Assets/Images/User.png";
let Users = (props)=>{

    let countPage=Math.ceil(props.totalCount/props.pageSize);
    let pages=[];
    for(let i=1; i<= countPage ;i++){
        if(i<50) {
            pages.push(i);
        }
    }
    return ( <div>
        <div>{pages.map(p=><span onClick={()=>props.onChangePage(p) } > {p} </span>)}</div>
        {props.usersPage.users.map(u => <div key={u.id}>
            <div>
                <div><img className={st.avaPhoto} src={u.photos.small==null ? userPhoto : u.photos.small }></img></div>
                <div>
                    {u.followed ? <button onClick={()=>props.follow(u.id)}> Unfollow</button> : <button onClick={()=>props.unfollow(u.id)}> Follow</button>
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
