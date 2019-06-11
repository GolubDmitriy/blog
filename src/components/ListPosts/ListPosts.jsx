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
        searchPosts }) => {

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

    return (
        <React.Fragment>
            <SearchBar searchPosts={ searchPosts } />
            <ul>
                { elements }
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = ({ posts, statusFilterByAlphabet, statusFilterByAlphabetReverse }) => {
    return  { posts, statusFilterByAlphabet, statusFilterByAlphabetReverse }; 
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosts: textPosts => {
            dispatch(searchPosts(textPosts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts);
