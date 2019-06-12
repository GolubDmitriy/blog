import React from 'react';

import ListComments from '../ListComments/ListComments';
import NewComment from '../NewComment/NewComment';

const BlockComments = ({ postId }) => {
    return (
        <React.Fragment>
            <ListComments postId={ postId } />
            <NewComment postId={ postId } />
        </React.Fragment>
    )
}

export default BlockComments;
