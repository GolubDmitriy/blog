import React from 'react';

import { connect } from 'react-redux';

import ListComments from '../ListComments/ListComments';
import NewComment from '../NewComment/NewComment';

const BlockComments = ({ postId, errorLoadingComments, loadingComments }) => {
    
    if ( errorLoadingComments ) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Упс...</strong> Не можем подгрузить комментарии, попробуйте обновить страницу или зайти позже.
            </div>
        )
    }

    if ( loadingComments ) {
        return (
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    
    return (
        <React.Fragment>
            <ListComments postId={ postId } />
            <NewComment postId={ postId } />
        </React.Fragment>
    )
}

const mapStateToProps = ({ errorLoadingComments, loadingComments }) => {
    return { errorLoadingComments, loadingComments }
}

export default connect(mapStateToProps)(BlockComments);
