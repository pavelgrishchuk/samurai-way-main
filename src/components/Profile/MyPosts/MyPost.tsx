import React from "react";
import c from './MyPost.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.MyPosts}>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );

}

export default MyPosts;
