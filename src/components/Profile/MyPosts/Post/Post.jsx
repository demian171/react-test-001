import style from './Post.module.css';

function Post() {
    return (
        <div className={style.item}>
            <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="text"/>
            <div className="name">Name</div>
            <div className="text">text</div>
            <div className="message">message text</div>
        </div>
    );
}

export default Post;
