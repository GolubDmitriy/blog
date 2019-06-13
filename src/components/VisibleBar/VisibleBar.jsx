import React from 'react';
import { connect } from 'react-redux';

import { addNumberVisiblePosts, showAllPosts } from '../../actions/actions';

const VisibleBar = ({ numberVisiblePosts, addNumberVisiblePosts, showAllPosts, maxNumberVisible }) => {
    
    if ( numberVisiblePosts >= maxNumberVisible) {
        return null;
    }
    
    return (
        <div>
            <button onClick={ addNumberVisiblePosts }>Показать следующие посты</button>
            <button onClick={ showAllPosts }>Показать все посты</button>
        </div>
    )
}

const mapStateToProps = ({ numberVisiblePosts }) => {
    return { numberVisiblePosts };
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
