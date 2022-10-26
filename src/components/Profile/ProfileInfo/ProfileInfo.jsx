import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div className={s.info}>
            <div className={s.name}>Demian171</div>
            <div className={s.age}>Age 37 years</div>
        </div>
    );
}

export default ProfileInfo;
