import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BlockComments from '../BlockComments/BlockComments';

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
            (<span onClick={() => setLike(idPost)} className="btn btn-success">Like</span>) :
            (<span onClick={() => setLike(idPost)} className="btn btn-outline-success">Like</span>)

        const dislikeBtn = 
            dislike ? 
            (<span onClick={() => setDislike(idPost)} className="btn btn-danger">Dislike</span>) :
            (<span onClick={() => setDislike(idPost)} className="btn btn-outline-danger">Dislike</span>)

        const blockComments = this.state.visibileComments ? <BlockComments postId={ idPost } /> : null
                                 
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
                    <button onClick={ this.changeVisibleComments }
                        className="btn btn-outline-primary">
                        Comments { comments }
                    </button>
                    <span onClick={() => deletePost(idPost)}
                        className="btn btn-outline-dark">
                        Delete
                    </span>
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
