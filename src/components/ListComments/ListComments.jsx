import React from 'react';

import { connect } from 'react-redux';

import { commentsLoaded } from '../../actions/actions'

import ApiServices from '../../services/apiServices';

import Comment from '../Comment/Comment';

class ListComments extends React.Component {
    
    componentDidMount() {
        const apiServices = new ApiServices();
        apiServices.getCommentsByPostId(this.props.postId)
            .then(comments => {
                this.props.commentsLoaded(comments);
            })
    }
    
    render() {

        const { comments } = this.props;

        const commentsList = comments.map(comment => {
            return (
                <li key={ comment.id }>
                    <Comment 
                        name={ comment.name }
                        email={ comment.email }
                        body={ comment.body }
                    />
                </li>
            )
        })

        return (
            <ul>
                { commentsList }
            </ul>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return  { comments }; 
}

const mapDispatchToProps = dispatch => {
    return {
        commentsLoaded: comments => {
            dispatch(commentsLoaded(comments))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComments);
