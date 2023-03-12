import React from "react";
import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    selectedPage,
    setTotalCount,
    toggleIsFetching,
 getUsersThunk, followThunk,unfollowThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {Navigate} from "react-router-dom"


class UsersContainer extends React.Component {
    componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (selectedPage) => {
        this.props.selectedPage(selectedPage);
        this.props.getUsersThunk(selectedPage, this.props.pageSize)
    }
    render() {
    if(!this.props.isAuth) return <Navigate to={'/login'}/>
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
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
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
        isFollowing: state.usersPage.isFollowing,
        isAuth: state.auth.isAuth
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
    getUsersThunk,
    followThunk,
    unfollowThunk
})(UsersContainer);



