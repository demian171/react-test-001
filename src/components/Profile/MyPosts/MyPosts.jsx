import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <Post name='Alex' message='Alex some text message for You and somebody else' likes='5'/>
            <Post  name='Nik' message='Nik, are You sure?'  likes='1'/>

        </div>
    );
}

export default MyPosts;
