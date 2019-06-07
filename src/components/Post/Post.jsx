import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListComments from '../ListComments/ListComments';

import './Post.css';

class Post extends React.Component {
    
    render() {

        const { posts, id } = this.props;

        const post = posts.filter(post => Number(post.id) === Number(id))[0];
        
        return (
            <div>
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
                <Link to={"/edit-post/" + id}>Редактировать</Link>
                <ListComments postId={ id } />
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return  { posts } 
}

export default connect(mapStateToProps)(Post);
