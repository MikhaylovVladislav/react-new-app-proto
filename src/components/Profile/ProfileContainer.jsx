import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile, getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId=this.props.match.userId
        if(!userId){
            userId=2;
        }
    this.props.getUserProfile(userId)
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
        currentUserProfile: state.profilePage.currentUserProfile
    }
}

export let UseNavigate=(props)=>{
    const params = useParams();
    return(
    <ProfileContainer match={params} profile={props.profile} setUserProfile={props.setUserProfile} getUserProfile={props.getUserProfile}/>
    )
}
export default connect(mapsStateToProps, {setUserProfile, getUserProfile})(UseNavigate);