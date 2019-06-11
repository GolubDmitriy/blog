import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';

const SearchPage = ({ 
        foundPosts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike, 
        statusFilterByDislike }) => {
    
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

    if ( statusFilterByLike ) {
        resultPosts = resultPosts.filter(post => post.like)
        if (resultPosts.length === 0) {
            return <h1>Понравившихся Вам постов нет.</h1>
        }
    }

    if ( statusFilterByDislike ) {
        resultPosts = resultPosts.filter(post => post.dislike)
        if (resultPosts.length === 0) {
            return <h1>Не понравившихся Вам постов нет.</h1>
        }
    }

    const elements = resultPosts.map(post => {
        return (
            <li key={ post.id }>
                <ListItemPost
                    idPost = { post.id } 
                    title={ post.title }
                    text={ post.body }
                    like={ post.like }
                    dislike={ post.dislike }
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

const mapStateToProps = ({ 
        foundPosts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike, 
        statusFilterByDislike }) => {

    return  { 
        foundPosts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike, 
        statusFilterByDislike 
    }; 
}

export default connect(mapStateToProps)(SearchPage);
