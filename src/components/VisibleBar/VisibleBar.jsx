import React from 'react';
import { connect } from 'react-redux';

import { addNumberVisiblePosts, showAllPosts } from '../../actions/actions';

const VisibleBar = ({ posts, numberVisiblePosts, addNumberVisiblePosts, showAllPosts }) => {
    
    if ( numberVisiblePosts >= posts.length ) {
        return null;
    }
    
    return (
        <div>
            <button onClick={ addNumberVisiblePosts }>Показать следующие посты</button>
            <button onClick={ showAllPosts }>Показать все посты</button>
        </div>
    )
}

const mapStateToProps = ({ posts, numberVisiblePosts }) => {
    return { posts, numberVisiblePosts };
}

const mapDispatchToProps = dispatch => {
    return {
        addNumberVisiblePosts: () => {
            dispatch(addNumberVisiblePosts())
        },
        showAllPosts: () => {
            dispatch(showAllPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleBar);
