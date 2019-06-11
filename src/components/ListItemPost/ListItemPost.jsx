import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deletePost, setLike, setDislike } from '../../actions/actions';

import './ListItemPost.css';

const ListItemPost = ({ 
        title, 
        text, 
        idPost, 
        deletePost, 
        setLike, 
        like, 
        setDislike, 
        dislike, 
        comments }) => {

    const likeBtn = 
        like ? 
        (<span onClick={() => setLike(idPost)}>!!!Like!!!</span>) :
        (<span onClick={() => setLike(idPost)}>Like</span>)

    const dislikeBtn = 
        dislike ? 
        (<span onClick={() => setDislike(idPost)}>!!!Dislike!!!</span>) :
        (<span onClick={() => setDislike(idPost)}>Dislike</span>)
                                 
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
                { likeBtn }
                { dislikeBtn }
                <span>About</span>
                <span>Comments { comments }</span>
                <span onClick={() => deletePost(idPost)}>Delete</span>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: idPost => {
            dispatch(deletePost(idPost))
        },
        setLike: idPost => {
            dispatch(setLike(idPost))
        },
        setDislike: idPost => {
            dispatch(setDislike(idPost))
        }
    }
}

export default connect(null, mapDispatchToProps)(ListItemPost);
