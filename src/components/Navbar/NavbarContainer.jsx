import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        if(this.props.isLogSuccess) {
            return <Navbar userId={this.props.userId}/>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isLogSuccess: state.auth.isLogSuccess
    }
}
export default connect(mapStateToProps, {getAuthUserData})(NavbarContainer)