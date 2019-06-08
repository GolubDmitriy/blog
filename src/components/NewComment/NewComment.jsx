import React from 'react';
import { connect } from 'react-redux';

class NewComment extends React.Component {

    state = {
        newCommentValue: ''
    }

    changeNewCommentValue = event => {
        this.setState({
            newCommentValue: event.target.value
        })
    }

    sendNewComments = event => {
        event.preventDefault();
        console.log(this.state.newCommentValue)
        this.setState({
            newCommentValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={ this.sendNewComments }>
                <input 
                    type="text" 
                    value={ this.state.newCommentValue }
                    onChange={ this.changeNewCommentValue } />
                <input type="submit"/>
            </form>
        )
    }

}

export default connect()(NewComment);
