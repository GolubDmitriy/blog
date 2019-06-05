import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Link to="/posts/">Posts</Link>
        </div>
    )
}

export default Header;
