import React from 'react';
import classes from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../helpers/validators";
import Button from "../Common/Button/Button";

const maxLength30 = maxLengthCreator(30);
const minLength1 = minLengthCreator(1);
const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required, maxLength30, minLength1]}
                       name='newMessageBody'
                       placeholder='Enter your message'
                       className={classes.form}
                />
            </div>
            <div>
                <Button name={'send'}/>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(MessageForm)

const Dialogs = props => {
    const userId = parseInt(props.history.location.pathname.slice(-1))
    const addMessage = (values) => {
        if (!values.newMessageBody) return
        props.onSendMessageClick(values.newMessageBody, userId)
        values.newMessageBody = ''
    }
    const onDeleteMessage = (numMsg, userId) => {
        props.onDeleteMessageClick(numMsg, userId)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.usersData.map(person => {
                    return (
                        <UserItem photo={person.photo} name={person.name} id={person.id} key={person.id}/>
                    )
                })}
            </div>
            <div className={classes.dialogsItems}>
                <div>
                    <div className={classes.dialogHeader}>Dialog: </div>
                    {props.usersData[userId - 1]?.messages.map((el, index) => {
                        return <Message messages={el} key={index} userId={userId} numMsg={index}
                                        deleteMessage={onDeleteMessage}/>
                    })}
                </div>
                <div>
                    {userId ? <MessageReduxForm onSubmit={addMessage}/> : ''}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;