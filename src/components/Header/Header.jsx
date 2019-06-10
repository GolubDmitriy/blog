import React from 'react';

import { Link } from 'react-router-dom';

import FilterBar from '../FilterBar/FilterBar'

import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Link to="/posts/">Posts</Link>
            <Link to="/new-post">New Post</Link>
            <FilterBar />
        </div>
    )
}

export default Header;
