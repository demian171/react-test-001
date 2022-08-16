import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";


function MyPosts(props) {
    let postElements = props.posts.map(p => <Post name={p.name} message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let onPostChenge = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        console.log(text)
    }

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
        // newPostElement.current.value = '';
        
    }

    return (
        <div>
            <div>

                <textarea ref={newPostElement} onChange={onPostChenge} value={props.newPostText} id="" cols="30" rows="10"></textarea>
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
