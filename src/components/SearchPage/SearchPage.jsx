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
    
    return (
        <ul>
            { elements }
        </ul>
    )
} 

const mapStateToProps = ({ foundPosts }) => {
    return  { foundPosts }; 
}

export default connect(mapStateToProps)(SearchPage);
