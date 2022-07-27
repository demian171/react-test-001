// import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className="">
            <img src="https://miro.medium.com/max/1400/1*TqyRspx_5HOOieltIIzImw.jpeg" alt="" className="profile-wall"/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
