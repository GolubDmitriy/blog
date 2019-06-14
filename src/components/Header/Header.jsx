import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetAllFilter, removeSearchStatus } from '../../actions/actions';

import './Header.css';

const Header = ({ resetAllFilter, removeSearchStatus }) => {
    
    const reset = () => {
        resetAllFilter()
        removeSearchStatus()
    }
    
    return (
        <nav className="nav">
            <h1 className="nav-link">Header</h1>
            <Link to="/posts/" onClick={ reset } className="nav-link">Posts</Link>
            <Link to="/new-post" className="nav-link">New Post</Link>
        </nav>
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
