import React from "react";
import {connect} from "react-redux";
import {unfollowAC, followAC, setUsersAC, selectedPageAC, setTotalCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount)
                })

        }
    }

    onChangePage = (selectPage) => {
        this.props.selectedPage(selectPage);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log("then page")
            })
    }

    render() {

        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      usersPage={this.props.usersPage}
                      onChangePage={this.onChangePage}/>


    }
}
let mapStateToProps = (state)=> {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>dispatch(followAC(userId)),
        unfollow: (userId)=>dispatch(unfollowAC(userId)),
        setUsers: (users)=>dispatch(setUsersAC(users)),
        setTotalCount: (count)=>dispatch(setTotalCountAC(count)),
        selectedPage: (page)=>dispatch(selectedPageAC(page))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



