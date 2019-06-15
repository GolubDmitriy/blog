import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InstrumentBar from '../InstrumentBar/InstrumentBar';
import NotFoundPost from '../NotFoundPost/NotFoundPost';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; 

import './Post.css';


const Post = ({ posts, id, loadingPosts, errorLoadingPosts  }) => {

    if ( errorLoadingPosts ) {
        return null
    }

    const post = posts.filter(post => Number(post.id) === Number(id))[0];
    
    if (!loadingPosts && post) {
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <h1 className="display-6">{ post.title }</h1>
                    <p className="lead">
                        { post.body }
                    </p>
                    <hr className="my-2" />
                    <p className="lead">
                        <Link 
                            to={"/edit-post/" + id} 
                            className="btn btn-primary">
                            Редактировать
                        </Link>
                    </p>
                    <InstrumentBar 
                        idPost={ post.id } 
                        like= { post.like } 
                        dislike={ post.dislike } />
                </div>
            </React.Fragment>
        )
    } 

    if (!loadingPosts && !post) {
        return <NotFoundPost />
    }

    return <LoadingSpinner />
}


const mapStateToProps = ({ posts, loadingPosts, errorLoadingPosts }) => {
    return  { posts, loadingPosts, errorLoadingPosts } 
}

export default connect(mapStateToProps)(Post);
