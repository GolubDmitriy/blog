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
                    <div className="form-group">
                        <label htmlFor="title-new-post">Тема поста</label>
                        <input 
                            type="text" 
                            placeholder="Тема поста" 
                            value={ this.state.valueTitle }
                            onChange={ this.changeValueTitle }
                            className="form-control"
                            id="title-new-post" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body-new-post">Тема поста</label>
                        <textarea 
                            type="text" 
                            placeholder="body" 
                            value={ this.state.valueBody }
                            onChange={ this.changeValueBody }
                            className="form-control"
                            id="body-new-post"
                            rows="20" />
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
