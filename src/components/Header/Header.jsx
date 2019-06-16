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
            <h1 className="nav-link text-info">Блог</h1>
            <div className="d-flex align-self-center">
                <Link to="/posts/" onClick={ reset } className="nav-link">Посты</Link>
                <Link to="/new-post" className="nav-link">Создать пост</Link>
            </div>
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
