import React from 'react';
import { Link } from 'react-router-dom'

import './ListItemPost.css';

const Post = ({title, text, idPost}) => {
    return (
        <div className="post-mini">
            <div className="post-mini-title">
                <h3>
                    <Link to={"/post/" + idPost}>
                        { title }
                    </Link>
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
