import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, authThunk} from "../../redux/auth-reducer";
import {AuthAPI} from '../../API/API'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk();
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        authId: state.auth.authId,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData, authThunk})(HeaderContainer)
