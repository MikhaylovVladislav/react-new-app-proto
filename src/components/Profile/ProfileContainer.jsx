import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId=this.props.match.userId
        if(!userId){
            userId=2;
        }
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {this.props.setUserProfile(response.data);
            })
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
    <ProfileContainer match={params} profile={props.profile} setUserProfile={props.setUserProfile}/>
    )
}
export default connect(mapsStateToProps, {setUserProfile})(UseNavigate);