import React from "react";
import {connect} from "react-redux";
import Users from './Users';
import {unfollowAC, followAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state)=> {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>dispatch(followAC(userId)),
        unfollow: (userId)=>dispatch(unfollowAC(userId)),
        setUsers: (users)=>dispatch(setUsersAC(users))
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer