import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post key={p.id} name={p.name} message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.dispatch(updateNewPostActionCreator(text));
        props.updateNewPostText(text);
        // console.log(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols="30" rows="10"> </textarea>
            </div>
            <div>
                <button  onClick={onAddPost}> Add new post
                </button>
            </div>
            <div className={s.myPosts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
