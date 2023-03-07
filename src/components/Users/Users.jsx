import React from 'react'
import st from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../Assets/Images/User.png';


class Users extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.usersPage.users.length===0) {
            axios.default.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => this.props.setUsers(response.data.items))
        }
    }
    render() {
        return ( <div> <button>sss</button>
            <div>ALL USERS</div>
            {this.props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <div><img className={st.avaPhoto} src={u.photos.small==null ? userPhoto : u.photos.small }></img></div>
                    <div>
                        {u.followed ? <button onClick={()=>this.props.follow(u.id)}> Unfollow</button> : <button onClick={()=>this.props.unfollow(u.id)}> Follow</button>


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
}
export default Users