import React from 'react';
import classes from "./Post.module.css";
import likeIcon from "../../../../assets/likesIcon/like.png"
import dislikeIcon from "../../../../assets/likesIcon/dislike.png"

const Post = props => {
    const onClickToggle = () => {
        props.toggleLikes(props.id)
    }

    return (
        <div className={classes.item} id={props.id}>
            <div>
                <img className={classes.photo} src={props.photo} alt='user icon'/>
            </div>
            <div className={classes.postMsg}>
                <div className={classes.msg}>
                    {props.message}
                </div>
                <div>
                    <button onClick={onClickToggle} className={classes.btn}>
                        <span>
                            <img src={props.liked ? dislikeIcon : likeIcon}
                                 className={props.liked ? classes.likeIcon : classes.dislikeIcon} alt=""/>
                        </span>
                    <span>
                        {props.likes} {props.liked ? `Liked` : `Like`}
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post;