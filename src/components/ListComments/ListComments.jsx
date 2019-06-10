import React from 'react';

import { connect } from 'react-redux';

import Comment from '../Comment/Comment';

const ListComments = ({ comments, postId }) => {
 
    const commentsByPost = comments.filter(comment => Number(comment.postId) === Number(postId));

    const commentsList = commentsByPost.map(comment => {
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


const mapStateToProps = ({ comments }) => {
    return  { comments }; 
}

export default connect(mapStateToProps)(ListComments);
