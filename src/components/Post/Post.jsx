import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListComments from '../ListComments/ListComments';
import NewComment from '../NewComment/NewComment';

import './Post.css';

const Post = ({ posts, id, loadingPosts  }) => {

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
                        <Link to={"/edit-post/" + id} className="btn btn-primary">Редактировать</Link>
                    </p>
                </div>
                <NewComment postId={ id } />
                <ListComments postId={ id } />
            </React.Fragment>
        )
    } 

    if (!loadingPosts && !post) {
        return <h1>Поста нет...</h1>
    }

    return (
        <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}


const mapStateToProps = ({ posts, loadingPosts }) => {
    return  { posts, loadingPosts } 
}

export default connect(mapStateToProps)(Post);
