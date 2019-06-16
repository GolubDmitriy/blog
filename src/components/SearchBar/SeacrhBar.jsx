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
        if ( this.state.searchValue.length !== 0 ) {
            this.props.searchPosts(this.state.searchValue);
            this.setState({
                searchValue: '',
            });
        }
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={ this.searchPost } 
                    className="input-group">
                    <input 
                        type="text"
                        value={ this.state.searchValue }
                        onChange={ this.changeSearchValue }
                        className="form-control" />
                    <div className="input-group-append">
                        <input 
                            type="submit" 
                            value="Найти" 
                            className="btn btn-info" />
                    </div>
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
