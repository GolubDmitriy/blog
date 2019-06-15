import React from 'react';

import { connect } from 'react-redux';

import ListComments from '../ListComments/ListComments';
import NewComment from '../NewComment/NewComment';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BlockComments = ({ postId, errorLoadingComments, loadingComments }) => {
    
    if ( errorLoadingComments ) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Упс...</strong> Не можем подгрузить комментарии, попробуйте обновить страницу или зайти позже.
            </div>
        )
    }

    if ( loadingComments ) {
        return <LoadingSpinner />
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
