import s from './Post.module.css';
import likeImg from '../../../../img/like.svg'

function Post(props) {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="text"/>
            <div className={s.info}>
                <div className={s.name}> {props.name} </div>
                <div className={s.message}> {props.message} </div>
                <div className={s.liks}>
                    <img className={s.likeImg} src={likeImg} alt="" />
                    {props.likes}
                </div>
            </div>
        </div>
    );
}

export default Post;
