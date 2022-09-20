import React from "react";
import c from './Post.module.css'

type PostPropsType = {
    message: string
    counter: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={c.Posts}>
            <div className={c.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb5Yu2HC0ijVPBRq801G2D45a9fLj3-f1UkNXxAaPZyBxkA8S3j6VKvGtEoBj_QzjznU&usqp=CAU'/>
                {props.message}
                <div>
                    <span>like {props.counter}</span>
                </div>
            </div>
        </div>
    );

}

export default Post;
