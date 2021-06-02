import React, {Fragment} from "react";
import classes from './Friends.module.css';

const friends = ({friends}) => {
    let person = friends.map(person => {
        return (
            <div className={classes.person} key={person.id}>
                <img src={person.source}
                     alt="avatar"
                     className={classes.image}/>
                <p className={classes.name} id={person.id}>{person.name}</p>
            </div>
        )})
    return (
        <Fragment>
            <div className={classes.friendsBlock}>
                <div className={classes.friends}>Friends:</div>
                {person}
            </div>
        </Fragment>
    )
}
export default friends;