import React from 'react';

import { connect } from 'react-redux';

import Comment from '../Comment/Comment';

import './ListComments.css';

const ListComments = ({ comments, postId }) => {
 
    const commentsByPost = comments.filter(comment => Number(comment.postId) === Number(postId));
    
    if ( commentsByPost.length === 0 ) {
        return (
            <div className="alert alert-dark list-comments" role="alert">
                <strong>Комментариев к этому посту нет</strong> 
            </div>
        )
    }

    const commentsList = commentsByPost.map(comment => {
        return (
            <li key={ comment.id } className="list-group-item" >
                <Comment 
                    idComment={ comment.id }
                    name={ comment.name }
                    email={ comment.email }
                    body={ comment.body }
                />
            </li>
        )
    })

    return (
        <React.Fragment>
            <h4 className="mb-2 list-comments">Комментарии к посту:</h4>
            <ul className="list-group" >
                { commentsList }
            </ul>
        </React.Fragment>
    )
}


const mapStateToProps = ({ comments }) => {
    return  { comments }; 
}

export default connect(mapStateToProps)(ListComments);
