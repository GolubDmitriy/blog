import React from 'react';

const Comment = ({ email, name, body }) => {
    return (
        <div>
            <h4>{ name }</h4>
            <p>{ email }</p>
            <p>{ body }</p>
        </div>
    )
}

export default Comment;
