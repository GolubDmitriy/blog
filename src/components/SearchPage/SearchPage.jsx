import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';

const SearchPage = ({ foundPosts, statusFilterByAlphabet, statusFilterByAlphabetReverse }) => {
    
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

    if ( statusFilterByAlphabetReverse ) {
        resultPosts.reverse()
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

const mapStateToProps = ({ foundPosts, statusFilterByAlphabet, statusFilterByAlphabetReverse }) => {
    return  { foundPosts, statusFilterByAlphabet, statusFilterByAlphabetReverse }; 
}

export default connect(mapStateToProps)(SearchPage);
