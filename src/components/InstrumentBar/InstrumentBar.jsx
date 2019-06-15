import React from 'react';
import { connect } from 'react-redux'; 

import { deletePost, setLike, setDislike } from '../../actions/actions';

import BlockComments from '../BlockComments/BlockComments';

class InstrumentBar extends React.Component {
    
    state = {
        visibleComments: false
    }

    changeVisibleComments = () => {
        this.setState(prev => {
            return {
                visibleComments: !prev.visibleComments
            }
        })
    }

    render() {

        const {
            idPost, 
            deletePost, 
            setLike,  
            setDislike, 
            comments,
            like,
            dislike
            } = this.props;

        const blockComments = this.state.visibleComments ? <BlockComments postId={ idPost } /> : null
        
        const commentsPost = comments.filter(comment => Number(idPost) === Number(comment.postId))

        return (
            <React.Fragment>
                <div className="post-mini-menu-bar navbar">
                    <span 
                        onClick={() => setLike(idPost)} 
                        className={ like ? "btn btn-success" : "btn btn-outline-success" }>
                        Like
                    </span>
                    <span 
                        onClick={() => setDislike(idPost)} 
                        className={ dislike ? "btn btn-danger" : "btn btn-outline-danger" }>
                        Dislike
                    </span>
                    <button 
                        onClick={ this.changeVisibleComments }
                        className={ this.state.visibleComments ? "btn btn-primary" : "btn btn-outline-primary" }>
                        Comments { commentsPost.length }
                    </button>
                    <span 
                        onClick={() => deletePost(idPost)}
                        className="btn btn-outline-dark">
                        Delete
                    </span>
                </div>
                { blockComments }
            </React.Fragment>

        )
    }
}

const mapStateToProps = ({ comments }) => {
    return {  comments }
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

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentBar);
