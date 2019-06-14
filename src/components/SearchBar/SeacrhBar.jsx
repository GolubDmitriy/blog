import React from 'react';

import { connect } from 'react-redux';

import { searchPosts } from '../../actions/actions';

class SearchBar extends React.Component {

    state = {
        searchValue: '',
    }

    changeSearchValue = event => {
        this.setState({
            searchValue: event.target.value
        })
    }

    searchPost = event => {
        event.preventDefault();
        this.props.searchPosts(this.state.searchValue);
        this.setState({
            searchValue: '',
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.searchPost }>
                    <input 
                        type="text"
                        value={ this.state.searchValue }
                        onChange={ this.changeSearchValue } />
                    <input type="submit" value="Найти"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosts: textPosts => {
            dispatch(searchPosts(textPosts))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
