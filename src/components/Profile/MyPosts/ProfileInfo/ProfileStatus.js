import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(() => true)
    }
    const deactivateEditMode = () => {
        setEditMode(() => false)
        props.updateUserStatus(status, 2)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <b>Status: </b>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}/>
                </div> :
                <div>
                    <span onDoubleClick={activateEditMode}><b>Status: </b>{status || '---'}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;