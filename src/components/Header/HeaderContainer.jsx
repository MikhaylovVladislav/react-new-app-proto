import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {

        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            .then(response => { console.log(response)
                if(response.data.resultCode===0){
            let {id, login, email}=response.data.data
                this.props.setAuthUserData(id, login, email)}})
    }

    render(){
        return <Header {...this.props}/>
    }

}
let mapStateToProps = (state)=>{
    return {
        login: state.auth.login,
        authId: state.auth.authId,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
