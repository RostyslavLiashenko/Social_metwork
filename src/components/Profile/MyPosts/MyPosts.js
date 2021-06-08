import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../helpers/validators";
import {Textarea} from "../../Common/FormControls/FormControls";
import Button from "../../Common/Button/Button";

const maxLength20 = maxLengthCreator(20);
const minLength1 = minLengthCreator(3);
const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='enter your text' className={classes.textField}
                    validate={[required, maxLength20, minLength1]}
                    component={Textarea} name='postText'/>
            </div>
            <div>
                <Button name={`Add post`}/>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'postForm'
})(PostForm)
const MyPosts = props => {
    const addPost = (values) => {
        if (values.postText)
        props.addPost(values.postText)
        values.postText = ''
    }
    let postsElements = props.userPosts.map(el =>
        <Post photo={el.photo} message={el.message} toggleLikes={props.toggleLikes}
              key={el.id} likes={el.likes} id={el.id} liked={el.liked}
        />)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;