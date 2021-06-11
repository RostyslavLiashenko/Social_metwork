import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';
import {TextField} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';

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
                    <TextField
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}/>
                 :
                <div style={{display: "flex", alignItems: 'center'}}>
                    <span className={classes.statusMsg}>{status || '---'}</span>
                    <SettingsIcon style={{cursor: 'pointer'}} onClick={activateEditMode}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatus;