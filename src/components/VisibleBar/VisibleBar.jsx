import React from 'react';
import { connect } from 'react-redux';

import { addNumberVisiblePosts, showAllPosts } from '../../actions/actions';

import './VisibleBar.css'

const VisibleBar = ({ numberVisiblePosts, addNumberVisiblePosts, showAllPosts, maxNumberVisible }) => {
    
    if ( numberVisiblePosts >= maxNumberVisible) {
        return null;
    }
    
    return (
        <div className="visible-bar d-flex justify-content-center">
            <button 
                onClick={ addNumberVisiblePosts } 
                className="btn btn-outline-info visible-bar-btn">
                    Показать следующие посты
            </button>
            <button 
                onClick={ showAllPosts }
                className="btn btn-outline-info">
                    Показать все посты
            </button>
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
