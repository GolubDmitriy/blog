import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchValue: ''
    }

    changeSearchValue = event => {
        this.setState({
            searchValue: event.target.value
        })
    }

    searchPost = event => {
        event.preventDefault();
        this.props.searchPosts(this.state.searchValue)
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.searchPost }>
                    <input 
                        type="text"
                        value={ this.state.value }
                        onChange={ this.changeSearchValue } />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;
