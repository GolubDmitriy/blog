import React from 'react';
import { connect } from 'react-redux';

import { addNewComment } from '../../actions/actions';

import './NewComment.css'

class NewComment extends React.Component {

    state = {
        newCommentValue: '',
        newCommentTitle: '',
        errorTitle: false,
        errorBody: false
    }

    changeNewCommentValue = event => {
        this.setState({
            newCommentValue: event.target.value
        })
    }

    changeNewCommentTitle = event => {
        this.setState({
            newCommentTitle: event.target.value
        })
    }

    sendNewComments = event => {
        event.preventDefault();
        if ( this.state.newCommentTitle.length > 3 && this.state.newCommentValue.length > 3 ) {
            const newComment = {
                postId: Number(this.props.postId),
                id: 501,
                name: this.state.newCommentTitle,
                email: "bethrezen-1@mail.ru",
                body: this.state.newCommentValue
            }
            this.props.addNewComment(newComment);
            this.setState({
                newCommentValue: '',
                newCommentTitle: '',
                errorTitle: false,
                errorBody: false
            })
        } else {
            this.setState({
                errorTitle: this.state.newCommentTitle.length <= 3 ? true : false,
                errorBody: this.state.newCommentValue.length  <= 3 ? true : false
            })
        }
    }

    render() {
        return (
            <div className="card new-comments">
                <h5 className="card-header">Оставьте Ваш комментарий</h5>
                <div className="card-body">
                    <form onSubmit={ this.sendNewComments }>
                            <div className="form-group">
                                <label htmlFor="title-new-comments">Тема комментария</label>
                                <input 
                                    type="text" 
                                    placeholder="Тема комментария" 
                                    value={ this.state.newCommentTitle }
                                    onChange={ this.changeNewCommentTitle }
                                    className="form-control"
                                    id="title-new-comments" />
                                { this.state.errorTitle ? <p className="text-danger">Тема комментария должна содержать хотя бы 4 символа.</p> : null }                        
                            </div>
                            <div className="form-group">
                                <label htmlFor="body-new-comments">Комментарий</label>
                                <textarea 
                                    type="text" 
                                    placeholder="Комментарий" 
                                    value={ this.state.newCommentValue }
                                    onChange={ this.changeNewCommentValue }
                                    className="form-control"
                                    id="body-new-comments" />
                                { this.state.errorBody ? <p className="text-danger">Комментарий должен содержать хотя бы 4 символа.</p> : null }
                            </div>
                            <input type="submit" value="Отправить" className="btn btn-outline-info" />
                    </form>
                </div>
            </div>
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
