import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import Preloader from "../components/Common/Preloader/Preloader";


let mapsStateToProps = (state) => {
    return {
        isInit: state.auth.initSuccess,
        isAuth: state.auth.isAuth

    }
}
export let WithAuthNavigate = (Component) => {
    class AuthNavigateComponent extends React.Component {
        render() {
           /* console.log(this.props.isInit+"  "+this.props.isAuth);*/
            if (this.props.isInit) {

                if (!this.props.isAuth) {

                    return <Navigate to={'/login'}/>
                }

                return <Component {...this.props}/>
            } else {
                return <Preloader/>

            }
        }
    }

    return connect(mapsStateToProps)(AuthNavigateComponent)
}