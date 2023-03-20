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
import {WithAuthNavigate} from "../../HOC/WithAuthNavigate";
import {compose} from "redux";
import {getIsFetching, getUsers} from "../../redux/users-selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.users)
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (selectedPage) => {
        this.props.selectedPage(selectedPage);
        this.props.getUsersThunk(selectedPage, this.props.pageSize)
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
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
            />
        </>


    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: getIsFetching(state),
        isFollowing: state.usersPage.isFollowing
    }
}

export default compose(
    WithAuthNavigate,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setTotalCount,
        selectedPage,
        toggleIsFetching,
        getUsersThunk,
        followThunk,
        unfollowThunk
    })
)(UsersContainer)



