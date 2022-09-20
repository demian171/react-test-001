import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";




function MyPosts(props) {

    let postElements = props.posts.map(p => <Post name={p.name} message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
        console.log(text);
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols="30" rows="10"> </textarea>
            </div>
            <div>
                <button  onClick={addPost}> Add new post
                </button>
            </div>
            <div className={s.myPosts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
