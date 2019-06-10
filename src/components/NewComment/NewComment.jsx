import React from 'react';
import { connect } from 'react-redux';

import { addNewComment } from '../../actions/actions';

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
        const newComment = {
            postId: Number(this.props.postId),
            id: 501,
            name: "Test",
            email: "bethrezen-1@mail.ru",
            body: this.state.newCommentValue
        }
        this.props.addNewComment(newComment);
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

const mapDispatchToProps = dispatch => {
    return {
        addNewComment: newComment => {
            dispatch(addNewComment(newComment))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewComment);
