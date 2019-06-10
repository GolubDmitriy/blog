import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';
import SearchBar from '../SearchBar/SeacrhBar';
import { searchPosts } from '../../actions/actions';

import './ListPosts.css';

class ListsPosts extends React.Component {

    render() {

        const { posts }  = this.props;

        const elements = posts.map(post => {
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
                <SearchBar searchPosts={ this.props.searchPosts } />
                <ul>
                    { elements }
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ posts, foundPosts }) => {
    return  { posts, foundPosts }; 
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosts: textPosts => {
            dispatch(searchPosts(textPosts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts);
