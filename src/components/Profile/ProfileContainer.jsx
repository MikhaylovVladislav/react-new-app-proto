import React from "react";
import Profile from "./Profile";
import {setUserProfile, getUserProfile, updateStatus, getStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams,} from 'react-router-dom';
import {WithAuthNavigate} from  './../../HOC/WithAuthNavigate';
import {compose} from "redux";
import {getAuthUserData} from "../../redux/auth-reducer";
class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
        let userId=this.props.match.userId
        if(this.props.initSuccess){
        if(!userId){

            userId=this.props.logUserId;
        }}
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapsStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        editStatus: state.profilePage.editStatus,
        status: state.profilePage.status,
        currentUserProfile: state.profilePage.currentUserProfile,
        logUserId: state.auth.userId,
        initSuccess: state.auth.initSuccess
    }
}

export let UseNavigate=(props)=>{
    const params = useParams();
    return(
    <ProfileContainer match={params} profile={props.profile} setUserProfile={props.setUserProfile} getUserProfile={props.getUserProfile} isAuth={props.isAuth}
                      status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus} logUserId={props.logUserId} getAuthUserData={props.getAuthUserData} initSuccess={props.initSuccess}/>
    )
}

export default compose (
    connect(mapsStateToProps, {setUserProfile, getUserProfile, updateStatus, getStatus,getAuthUserData }),
    WithAuthNavigate
    ) (UseNavigate)