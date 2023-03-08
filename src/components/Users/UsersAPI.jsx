import React from 'react'
import st from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../Assets/Images/User.png';
import Users from "./Users";


class UsersAPI extends React.Component {
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
                      usersPage={this.props.usersPage}
                      onChangePage={this.onChangePage}/>


    }
}
export default UsersAPI