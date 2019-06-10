import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';
import Post from '../Post/Post';
import ApiServices from '../../services/apiServices';
import NewPost from '../NewPost/NewPost';
import EditPost from '../EditPost/EditPost';
import SearchPage from '../SearchPage/SearchPage';
import { postsLoaded, commentsLoaded } from '../../actions/actions';

import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (this.props.loadingPosts) {
            const apiServices = new ApiServices();
            apiServices.getAllPosts()
                .then(posts => {
                    this.props.postsLoaded(posts);
                });
        }
        if (this.props.loadingComments) {
            const apiServices = new ApiServices();
            apiServices.getAllComments()
                .then(comments => {
                    this.props.commentsLoaded(comments);
                }); 
        }
    }

    render() {
        return (
            <div className="main-page">
                <Router>
                <Header />
                    <Route path="/posts" component={ ListPosts } />
                    <Route path="/post/:id" render={({match}) => {
                        return <Post id={match.params.id} />
                    }} />
                    <Route path="/new-post" component={ NewPost } />
                    <Route path="/edit-post/:id" render={({match}) => {
                        return <EditPost id={match.params.id} />
                    }} />
                    <Route path="/search" component={ SearchPage } />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, loadingPosts, loadingComments, comments }) => {
    return  { posts, loadingPosts, loadingComments, comments }; 
}

const mapDispatchToProps = dispatch => {
    return {
        postsLoaded: newPosts => {
            dispatch(postsLoaded(newPosts))
        },
        commentsLoaded: comments => {
            dispatch(commentsLoaded(comments))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
