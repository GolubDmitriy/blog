import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';

const SearchPage = ({ foundPosts, statusFilterByAlphabet }) => {
    
    let resultPosts = [...foundPosts];

    if ( statusFilterByAlphabet ) {
        resultPosts.sort((a, b) => {
            const post1 = a.title.toLowerCase();
            const post2 = b.title.toLowerCase();

            let comparison = 0;
            if (post1 > post2) {
                comparison = 1;
            } else {
                comparison = -1;
            }
            return comparison;
        })
    }

    const elements = resultPosts.map(post => {
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

const mapStateToProps = ({ foundPosts, statusFilterByAlphabet }) => {
    return  { foundPosts, statusFilterByAlphabet }; 
}

export default connect(mapStateToProps)(SearchPage);
