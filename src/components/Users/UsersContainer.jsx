import React from "react";
import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    selectedPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {UsersAPI} from '../../API/API'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setTotalCount(data.totalCount);
                    this.props.toggleIsFetching(false);
                })

        }
    }

    onChangePage = (selectedPage) => {
        this.props.toggleIsFetching(true);
        this.props.selectedPage(selectedPage);
        UsersAPI.getUsers(selectedPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   isFollowing={this.props.isFollowing}
                   toggleIsFetching={this.props.toggleIsFetching}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>


    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

/*let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>dispatch(followAC(userId)),
        unfollow: (userId)=>dispatch(unfollowAC(userId)),
        setUsers: (users)=>dispatch(setUsersAC(users)),
        setTotalCount: (count)=>dispatch(setTotalCountAC(count)),
        selectedPage: (page)=>dispatch(selectedPageAC(page)),
        toggleIsFetching: (toggle)=>dispatch(toggleIsFetchingAC(toggle))
    }
}*/


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalCount,
    selectedPage,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);



