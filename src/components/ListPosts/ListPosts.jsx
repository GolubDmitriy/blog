import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';
import SearchBar from '../SearchBar/SeacrhBar';
import VisibleBar from '../VisibleBar/VisibleBar';
import { searchPosts } from '../../actions/actions';
import FilterBar from '../FilterBar/FilterBar';

import './ListPosts.css';

const ListsPosts = ({ 
        posts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        searchPosts,
        statusFilterByLike,
        statusFilterByDislike,
        comments,
        statusFilterByTime,
        numberVisiblePosts,
        loadingPosts,
        isSeacrh,
        foundPosts }) => {

    if ( loadingPosts ) {
        return <h1>Loading...</h1>
    }

    let resultPosts = isSeacrh ? [...foundPosts] : [...posts]

    if (isSeacrh && resultPosts.length === 0) {
        return <h1>Постов с таким содержанием нет.</h1> 
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
            <li key={ post.id } className="shadow p-3 mb-5 bg-light rounded" >
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
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <FilterBar />
                <SearchBar searchPosts={ searchPosts } />
            </div>
            <ul className="list-group">
                { elements }
            </ul>
            <VisibleBar maxNumberVisible={ resultPosts.length } />
        </React.Fragment>
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
        foundPosts }) => {

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
        foundPosts 
    }; 
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosts: textPosts => {
            dispatch(searchPosts(textPosts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts);
