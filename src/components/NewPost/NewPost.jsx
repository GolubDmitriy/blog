import React from 'react';
import { connect } from 'react-redux';

import { addNewPost } from '../../actions/actions';

class NewPost extends React.Component {
    
    state = {
        valueTitle: '',
        valueBody: '',
        statusSendNewPost: false,
        errorTitle: false,
        errorBody: false 
    }

    sendNewPost = event => {
        event.preventDefault();
        if (this.state.valueTitle.length > 3 && this.state.valueBody.length > 3) {
            const newPost = {
                title: this.state.valueTitle,
                body: this.state.valueBody,
                userId: 1,
            } 
            this.props.addNewPost(newPost)
            this.setState({
                valueTitle: '',
                valueBody: '',
                statusSendNewPost: true 
            })
        }
        this.setState({
            errorTitle: this.state.valueTitle.length < 3 ? true : false,
            errorBody: this.state.valueBody.length < 3 ? true : false
        })
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

        if ( this.state.statusSendNewPost ) {
            return (
                <h3>Ваш пост успешно добавлен.</h3>
            )
        }

        return (
            <div>
                <form onSubmit={ this.sendNewPost }>
                    <div className="form-group">
                        <label htmlFor="title-new-post">Тема поста</label>
                        <input 
                            type="text" 
                            placeholder="Тема поста" 
                            value={ this.state.valueTitle }
                            onChange={ this.changeValueTitle }
                            className="form-control"
                            id="title-new-post" />
                        { this.state.errorTitle ? <p className="text-danger">Тема поста должна содержать хотя бы 4 символа.</p> : null }                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="body-new-post">Содержимое поста</label>
                        <textarea 
                            type="text" 
                            placeholder="body" 
                            value={ this.state.valueBody }
                            onChange={ this.changeValueBody }
                            className="form-control"
                            id="body-new-post"
                            rows="20" />
                        { this.state.errorBody ? <p className="text-danger">Содержимое поста должна содержать хотя бы 4 символа.</p> : null }
                    </div>
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
