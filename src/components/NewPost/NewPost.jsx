import React from 'react';
import { connect } from 'react-redux';

import { addNewPost } from '../../actions/actions';

class NewPost extends React.Component {
    
    state = {
        valueTitle: '',
        valueBody: '' 
    }

    sendNewPost = event => {
        event.preventDefault();
        const newPost = {
            title: this.state.valueTitle,
            body: this.state.valueBody,
            userId: 1,
            id: 101
        } 
        this.props.addNewPost(newPost)
    }

    changeValueTitle = event => {
        this.setState({
            valueTitle: event.target.value
        })
    }

    changeValueBody = event => {
        this.setState({
            valueBody: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.sendNewPost }>
                    <input 
                        type="text" 
                        placeholder="title" 
                        value={ this.state.valueTitle }
                        onChange={ this.changeValueTitle } />
                    <input 
                        type="text" 
                        placeholder="body" 
                        value={ this.state.valueBody }
                        onChange={ this.changeValueBody } />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewPost: newPost => {
            dispatch(addNewPost(newPost))
        } 
    }
}

export default connect(null, mapDispatchToProps)(NewPost);
