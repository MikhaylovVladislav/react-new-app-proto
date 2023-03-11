import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AuthAPI} from '../../API/API'

class HeaderContainer extends React.Component{
    componentDidMount() {
        AuthAPI.auth()
            .then(data => { console.log(data)
                let {id, login, email}=data
                this.props.setAuthUserData(id, login, email)})
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
