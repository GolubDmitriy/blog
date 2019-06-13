import React from 'react';

const Comment = ({ email, name, body }) => {
    return (
        <div>
            <h5 className="mb-1 text-center">{ name }</h5>
            <p>{ email }</p>
            <p className="mb-1">{ body }</p>
        </div>
    )
}

export default Comment;
