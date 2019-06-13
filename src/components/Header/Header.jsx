import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetAllFilter, removeSearchStatus } from '../../actions/actions';
import FilterBar from '../FilterBar/FilterBar';

import './Header.css';

const Header = ({ resetAllFilter, removeSearchStatus }) => {
    
    const reset = () => {
        resetAllFilter()
        removeSearchStatus()
    }
    
    return (
        <div className="navbar">
            <h1 className="nav-item">Header</h1>
            <Link to="/posts/" onClick={ reset }>Posts</Link>
            <Link to="/new-post">New Post</Link>
            <FilterBar />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        resetAllFilter: () => {
            dispatch(resetAllFilter())
        },
        removeSearchStatus: () => {
            dispatch(removeSearchStatus())
        } 
    }
}

export default connect(null, mapDispatchToProps)(Header);
