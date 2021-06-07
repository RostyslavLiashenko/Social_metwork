import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        if (props.isOwner)
        setEditMode(() => true)
    }
    const deactivateEditMode = () => {
        setEditMode(() => false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={classes.statusBlock}>
            <span className={classes.status}>Status: </span>
            {editMode ?
                    <input
                        className={classes.statusInput}
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}/>
                 :
                <div>
                    <span className={classes.statusMsg}>{status || '---'}</span>
                    <button className={classes.statusChngBtn} onClick={activateEditMode}>
                        <img src="https://www.svgrepo.com/show/146207/settings-cogwheel-button.svg" alt="change"/>
                    </button>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;