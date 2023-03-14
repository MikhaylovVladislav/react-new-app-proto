import React from "react";
import st from "../Profile.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode=()=> {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode=()=> {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onUpdateStatus = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
                }
            )
        }
    }

    render() {
        return (
            <div>  {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.state.status}</span>
                </div>
                :
                <div>
                    <input onChange={this.onUpdateStatus} autoFocus={true} onBlur={this.deActivatedEditMode} value={this.state.status}></input>
                </div>
            }
            </div>
        )
    }
}

export default ProfileStatus;