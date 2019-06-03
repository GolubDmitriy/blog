import React from 'react';
import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';
import Post from '../Post/Post';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <div className="main-page">
            <Header />
            <Router>
                <Route path="/posts" component={ ListPosts } />
                <Route path="/post/:id" render={({match}) => {
                    return <Post id={match.params.id}/>
                }} />
            </Router>
        </div>
    )
}

export default App;
