import React, {useState} from "react";
import st from "../Profile.module.css";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deActivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onUpdateStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>  {!editMode ?
            <div>
                <span onDoubleClick={activatedEditMode}>{status}</span>
            </div>
            :
            <div>
                <input onChange={onUpdateStatus} autoFocus={true} onBlur={deActivatedEditMode} value={status}></input>
            </div>
        }
        </div>
    )

}

export default ProfileStatusWithHooks;