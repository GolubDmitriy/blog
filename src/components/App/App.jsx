import React from 'react';
import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';

import './App.css';

const App = () => {
    return (
        <div className="main-page">
            <Header />
            <ListPosts />
        </div>
    )
}

export default App;
