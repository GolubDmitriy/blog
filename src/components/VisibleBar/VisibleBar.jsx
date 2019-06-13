import React from 'react';
import { connect } from 'react-redux';

import { addNumberVisiblePosts } from '../../actions/actions';

const VisibleBar = ({ posts, numberVisiblePosts, addNumberVisiblePosts }) => {
    
    if ( numberVisiblePosts >= posts.length ) {
        return null;
    }
    
    return (
        <div>
            <button onClick={ addNumberVisiblePosts }>Показать следующие посты</button>
            <button>Показать все посты</button>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleBar);
