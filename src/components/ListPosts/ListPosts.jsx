import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';
import SearchBar from '../SearchBar/SeacrhBar';
import { searchPosts } from '../../actions/actions';

import './ListPosts.css';

const ListsPosts = ({ 
        posts, 
        statusFilterByAlphabet, 
        statusFilterByAlphabetReverse, 
        searchPosts,
        statusFilterByLike }) => {

    let resultPosts = [...posts];

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

    const elements = resultPosts.map(post => {
        return (
            <li key={ post.id }>
                <ListItemPost
                    idPost = { post.id } 
                    title={ post.title }
                    text={ post.body }
                    like= { post.like }
                />
            </li>
        )
    })

    return (
        <React.Fragment>
            <SearchBar searchPosts={ searchPosts } />
            <ul>
                { elements }
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = ({ posts, statusFilterByAlphabet, statusFilterByAlphabetReverse, statusFilterByLike }) => {
    return  { posts, statusFilterByAlphabet, statusFilterByAlphabetReverse, statusFilterByLike }; 
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosts: textPosts => {
            dispatch(searchPosts(textPosts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts);
