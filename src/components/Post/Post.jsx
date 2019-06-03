import React from 'react';

import './Post.css';

const Post = ({title, text}) => {
    return (
        <div className="post-mini">
            <div className="post-mini-title">
                <h3>
                    { title }
                </h3>
            </div>
            <div className="post-mini-body">
                { text }
            </div>
            <div className="post-mini-menu-bar">
                <span>Like</span>
                <span>Dislike</span>
                <span>About</span>
                <span>Comments</span>
            </div>
        </div>
    )
};

export default Post;
