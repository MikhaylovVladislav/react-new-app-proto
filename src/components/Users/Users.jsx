import React from "react";
import st from "./Users.module.css";
import userPhoto from "../../Assets/Images/User.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
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
                    {!u.followed ? <button onClick={()=>{
                        axios.default.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` , {}, {withCredentials: true,
                            headers: {"API-KEY": "92b73b48-65df-4bb9-9263-163693cf0d8a"}})
                            .then(response => {console.log(response)
                                if(response.data.resultCode===0){ props.follow(u.id)}
                            })

                    }
                    }> Unfollow</button> : <button onClick={()=>{
                        axios.default.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` ,{withCredentials: true,
                            headers: {"API-KEY": "92b73b48-65df-4bb9-9263-163693cf0d8a"}}  )
                            .then(response => { console.log(response)
                                if(response.data.resultCode===0){ props.unfollow(u.id)}
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
