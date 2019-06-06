import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';
import Post from '../Post/Post';
import ApiServices from '../../services/apiServices'
import { postsLoaded } from '../../actions/actions'

import './App.css';

const App = ({ posts, postsLoaded }) => {

    if (posts.length === 0) {
        const apiServices = new ApiServices();
        apiServices.getAllPosts()
            .then(data => {
                postsLoaded(data)
            });
    } 

    return (
        <div className="main-page">
            <Router>
            <Header />
                <Route path="/posts" component={ ListPosts } />
                <Route path="/post/:id" render={({match}) => {
                    return <Post id={match.params.id}/>
                }} />
            </Router>
        </div>
    )
}

const mapStateToProps = ({ posts }) => {
    return  { posts }; 
}

const mapDispatchToProps = dispatch => {
    return {
        postsLoaded: newPosts => {
            dispatch(postsLoaded(newPosts))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
