import React from 'react';
import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <div className="main-page">
            <Header />
            <Router>
                <Route path="/posts" component={ ListPosts } />
            </Router>
        </div>
    )
}

export default App;
