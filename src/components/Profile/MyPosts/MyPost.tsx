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
            <Post message={'Hi,how are you?'} counter={'15'} />
            <Post message={'It is my first post.'} counter={'25'}/>
            {/*<Post/>
            <Post/>
            <Post/>*/}
        </div>
    );

}

export default MyPosts;
