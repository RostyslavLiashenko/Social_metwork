import React from 'react';
import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.item} id={props.id}>
            <div>
                <img className={classes.photo} src={props.photo} alt='user icon'/>
            </div>
            message: {props.message}
            <div>
                <span>{props.likes === 1 ? `like` : `likes`}: {props.likes}</span>
            </div>
        </div>
    )
}
export default Post;