import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import ListPosts from '../ListPosts/ListPosts';
import Post from '../Post/Post';
import ApiServices from '../../services/apiServices';
import NewPost from '../NewPost/NewPost';
import EditPost from '../EditPost/EditPost';
import Error5xx from '../Error5xx/Error5xx';

import { postsLoaded, commentsLoaded, setErrorLoadingComments, setErrorLoadingPosts } from '../../actions/actions';

import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (this.props.loadingPosts) {
            const apiServices = new ApiServices();
            apiServices.getAllPosts()
                .then(posts => {
                    this.props.postsLoaded(posts);
                })
                .catch(data => {
                    console.log(data);
                    this.props.setErrorLoadingPosts();
                })
        }
        if (this.props.loadingComments) {
            const apiServices = new ApiServices();
            apiServices.getAllComments()
                .then(comments => {
                    this.props.commentsLoaded(comments);
                })
                .catch(data => {
                    console.log(data);
                    this.props.setErrorLoadingComments();
                })
        }
    }

    render() {

        return (
            <div className="main-page">
                <Router>
                    <Header />
                    { this.props.errorLoadingPosts ? <Error5xx /> : null }
                    <Route path="/posts" component={ ListPosts } />
                    <Route path="/post/:id" render={({match}) => {
                        return <Post id={match.params.id} />
                    }} />
                    <Route path="/new-post" component={ NewPost } />
                    <Route path="/edit-post/:id" render={({match}) => {
                        return <EditPost id={match.params.id} />
                    }} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, loadingPosts, loadingComments, comments, errorLoadingPosts }) => {
    return  { posts, loadingPosts, loadingComments, comments, errorLoadingPosts }; 
}

const mapDispatchToProps = dispatch => {
    return {
        postsLoaded: newPosts => {
            dispatch(postsLoaded(newPosts))
        },
        commentsLoaded: comments => {
            dispatch(commentsLoaded(comments))
        },
        setErrorLoadingPosts: () => {
            dispatch(setErrorLoadingPosts())
        },
        setErrorLoadingComments: () => {
            dispatch(setErrorLoadingComments())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
