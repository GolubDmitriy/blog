import React from 'react';

import { connect } from 'react-redux';

import { deleteComment } from '../../actions/actions';

const Comment = ({ email, name, body, deleteComment, idComment }) => {
    return (
        <div>
            <h5 className="mb-1 text-center">{ name }</h5>
            <p>{ email }</p>
            <p className="mb-1">{ body }</p>
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
