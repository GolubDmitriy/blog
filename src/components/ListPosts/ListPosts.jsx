import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';
import TemplateListPosts from '../TemplateListPosts/TemplateListPosts';

import './ListPosts.css';

const ListsPosts = ({ 
        posts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike,
        statusFilterByDislike,
        comments,
        statusFilterByTime,
        numberVisiblePosts,
        loadingPosts,
        isSeacrh,
        foundPosts,
        errorLoadingPosts }) => {

    if ( errorLoadingPosts ) {
        return null
    }

    if ( loadingPosts ) {
        return (
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    let resultPosts = isSeacrh ? [...foundPosts] : [...posts]

    if (isSeacrh && resultPosts.length === 0) {
        return (
            <TemplateListPosts elements={(<h3>Постов с таким содержанием нет.</h3>)} />
        )
    }

    if ( statusFilterByLike ) {
        resultPosts = resultPosts.filter(post => post.like)
        if (resultPosts.length === 0) {
            return (
                <TemplateListPosts elements={(<h3>Понравившихся Вам постов нет.</h3>)} />
            )
        }
    }

    if ( statusFilterByDislike ) {
        resultPosts = resultPosts.filter(post => post.dislike)
        if (resultPosts.length === 0) {
            return (
                <TemplateListPosts elements={(<h3>Не понравившихся Вам постов нет.</h3>)} />
            )
        }
    }

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

    if ( statusFilterByAlphabetReverse || statusFilterByTime ) {
        resultPosts.reverse()
    }

    const visiblePosts = resultPosts.slice(0, numberVisiblePosts)

    const elements = visiblePosts.map(post => {
        const commentsPost = comments.filter(comment => Number(post.id) === Number(comment.postId))
        return (
            <li key={ post.id } >
                <ListItemPost
                    idPost = { post.id } 
                    title={ post.title }
                    text={ post.body }
                    like={ post.like }
                    dislike={ post.dislike }
                    comments={ commentsPost.length }
                />
            </li>
        )
    })

    return (
        <TemplateListPosts elements={ elements } resultPosts={ resultPosts } />
    )
}

const mapStateToProps = ({ 
        posts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike, 
        statusFilterByDislike,
        comments,
        statusFilterByTime,
        numberVisiblePosts,
        loadingPosts,
        isSeacrh,
        foundPosts,
        errorLoadingPosts }) => {

    return { 
        posts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        statusFilterByLike, 
        statusFilterByDislike,
        comments,
        statusFilterByTime,
        numberVisiblePosts,
        loadingPosts,
        isSeacrh,
        foundPosts,
        errorLoadingPosts 
    }; 
}

export default connect(mapStateToProps)(ListsPosts);
