import React from "react";
import st from "../Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>  {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activatedEditMode.bind(this)}> sss</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={this.deActivatedEditMode.bind(this)}></input>
                </div>
            }
            </div>
        )
    }
}

export default ProfileStatus;