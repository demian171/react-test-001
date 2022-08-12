import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <Post name='Alex' message='Alex some text message for You and somebody else' likes='5'/>
            <Post name='Nik' message='Nik, are You sure?'  likes='1'/>
            <Post name='Alex' message='Nik come to me' likes='3'/>
            <Post name='Nik' message='Superman is back'  likes='8'/>
        </div>
    );
}

export default MyPosts;
