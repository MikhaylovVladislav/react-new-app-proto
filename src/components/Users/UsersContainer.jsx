import React from "react";
import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    selectedPage,
    setTotalCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                    this.props.toggleIsFetching(false);
                })

        }
    }

    onChangePage = (selectPage) => {
        this.props.toggleIsFetching(true);
        this.props.selectedPage(selectPage);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                   currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                   toggleIsFetching={this.props.toggleIsFetching}
            />
            </>


    }
}
let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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


export default connect(mapStateToProps, {follow, unfollow, setUsers,setTotalCount, selectedPage,toggleIsFetching})(UsersContainer);



