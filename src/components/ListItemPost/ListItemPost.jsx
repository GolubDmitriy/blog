import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LictComments from '../ListComments/ListComments';
import NewComment from '../NewComment/NewComment'

import { deletePost, setLike, setDislike } from '../../actions/actions';

import './ListItemPost.css';

class ListItemPost extends React.Component { 
     
    state = {
        visibileComments: false,
    }

    changeVisibleComments = () => {
        this.setState(prevState => {
            return {
                visibileComments: !prevState.visibileComments
            }
        })
    }

    render() {
        const {
            title, 
            text, 
            idPost, 
            deletePost, 
            setLike, 
            like, 
            setDislike, 
            dislike, 
            comments } = this.props;

        const likeBtn = 
            like ? 
            (<span onClick={() => setLike(idPost)}>!!!Like!!!</span>) :
            (<span onClick={() => setLike(idPost)}>Like</span>)

        const dislikeBtn = 
            dislike ? 
            (<span onClick={() => setDislike(idPost)}>!!!Dislike!!!</span>) :
            (<span onClick={() => setDislike(idPost)}>Dislike</span>)

        const blockComments = 
            this.state.visibileComments ?
            (<React.Fragment>
                <LictComments postId={ idPost } />
                <NewComment postId={ idPost } />
            </React.Fragment>) : null
                                 
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
                <div className="post-mini-menu-bar navbar">
                    { likeBtn }
                    { dislikeBtn }
                    <span>About</span>
                    <button onClick={ this.changeVisibleComments }>Comments { comments }</button>
                    <span onClick={() => deletePost(idPost)}>Delete</span>
                </div>
                { blockComments }
            </div>
        )
    };
}

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
