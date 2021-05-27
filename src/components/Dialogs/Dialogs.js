import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../helpers/validators";

const maxLength50 = maxLengthCreator(50);
const minLength2 = minLengthCreator(2);
const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50, minLength2]}
                       name='newMessageBody'
                       placeholder='Enter your message'
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(MessageForm)

const Dialogs = props => {
    const addMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
        values.newMessageBody = ''
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.personsData.map(person => {
                    return (
                        <DialogItem name={person.name} id={person.id} key={person.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                <div>{props.dialogsPage.messagesData.map(el => {
                    return <Message msg={el.messages} id={el.id} key={el.id}/>
                })}</div>
                <div>
                    <MessageReduxForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;