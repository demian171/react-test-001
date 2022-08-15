import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    { id: 1, name: 'Alex', likes: 5, message: '111 hi, my friend'},
    { id: 1, name: 'Nik' , likes: 7, message: '222 Nik, are You sure?'},
    { id: 1, name: 'Dem' , likes: 3, message: '333 Nik come to me'},
    { id: 1, name: 'Lida', likes: 4, message: '444 Superman is back'},
]

let postElements = postData.map( p => <Post name={p.name} message={p.message} likes={p.likes} /> )

function MyPosts() {
    return (
        <div className={s.myPosts}>
            { postElements }
        </div>
    );
}

export default MyPosts;
