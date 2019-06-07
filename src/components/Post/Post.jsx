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
            <div>
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
                <Link to={"/edit-post/" + id}>Редактировать</Link>
                <NewComment postId={ id } />
                <ListComments postId={ id } />
            </div>
        )
    } 

    if (!loadingPosts && !post) {
        return <h1>Поста нет...</h1>
    }

    return <h1>Loading...</h1>
}


const mapStateToProps = ({ posts, loadingPosts }) => {
    return  { posts, loadingPosts } 
}

export default connect(mapStateToProps)(Post);
