import React from 'react';

import './Post.css';

const Post = ({title, text}) => {
    return (
        <div>
            <h3>{ title }</h3>
            <div className="body-post">{ text }</div>
            <div className="menu-bar">
                <span>Like</span>
                <span>Dislike</span>
                <span>About</span>
                <span>Comments</span>
            </div>
        </div>
    )
};

export default Post;
