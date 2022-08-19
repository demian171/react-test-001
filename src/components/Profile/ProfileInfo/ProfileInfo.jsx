import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div className={s.info}>
            <img className={s.img} src="https://miro.medium.com/max/1400/1*TqyRspx_5HOOieltIIzImw.jpeg" alt="" />
            <div className={s.name}>Demian171</div>
            <div className={s.age}>Age 37 years</div>
        </div>
    );
}

export default ProfileInfo;
