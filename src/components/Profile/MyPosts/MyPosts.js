import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../helpers/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);
const minLength1 = minLengthCreator(3);
const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='enter your text'
                    validate={[required, maxLength10, minLength1]}
                    component={Textarea} name='postText'/>
            </div>
            <div>
                <button>Add post</button>
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
    let postsElements = props.userPosts.map(el => <Post photo={el.photo} message={el.message} key={el.id} likes={el.likes} id={el.id}/>)
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
// React.memo(MyPosts) - оптимизирует компонет(работает без лишних перезагрузок)
// ShouldComponentUpdate(nextProps, nextState) { return nextProps !== this.props}
// PureComponent обычный Component который использует по дефолту ShouldComponentUpdate

export default MyPosts;