import React from 'react';

import { connect } from 'react-redux';

import { deleteComment } from '../../actions/actions';

const Comment = ({ email, name, body, deleteComment, idComment }) => {
    return (
        <div>
            <h5 className="mb-1 text-center">{ name }</h5>
            <hr />
            <p className="mb-1">{ body }</p>
            <p className="blockquote-footer">
                Комментарий оставил <cite title={ email }>{ email }</cite>
            </p>
            <span 
                onClick={() => deleteComment(idComment)}
                className="btn btn-outline-dark">
                Удалить комментарий
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteComment: idComment => {
            dispatch(deleteComment(idComment))
        }
    }
}

export default connect(null, mapDispatchToProps)(Comment);
