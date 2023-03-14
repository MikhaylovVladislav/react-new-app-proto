import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";


let mapsStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export let WithAuthNavigate = (Component) => {
    class AuthNavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapsStateToProps)(AuthNavigateComponent)
}