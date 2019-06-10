import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component {

    state = {
        searchValue: '',
        redirect: false
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
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/search" />
        }
        return (
            <div>
                <form onSubmit={ this.searchPost }>
                    <input 
                        type="text"
                        value={ this.state.searchValue }
                        onChange={ this.changeSearchValue } />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;
