import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
    return <div className={c.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'/>
        </div>
        <div>
            Ava+description
        </div>
        <MyPosts/>
    </div>

}

export default Profile;
