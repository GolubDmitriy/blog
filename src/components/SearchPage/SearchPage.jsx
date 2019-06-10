import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';

const SearchPage = ({ foundPosts }) => {
    
    const elements = foundPosts.map(post => {
        return (
            <li key={ post.id }>
                <ListItemPost
                    idPost = { post.id } 
                    title={ post.title }
                    text={ post.body }
                />
            </li>
        )
    })

    if (elements.length !== 0) {
        return (
            <ul>
                { elements }
            </ul>
        )
    }
    return <h1>Постов с таким содержанием нет.</h1>
} 

const mapStateToProps = ({ foundPosts }) => {
    return  { foundPosts }; 
}

export default connect(mapStateToProps)(SearchPage);
