import React from 'react';
import { connect } from 'react-redux';

import ApiServices from '../../services/apiServices';
import { postsLoaded, editPost } from '../../actions/actions';

class EditPost extends React.Component {

    state = {
        valueTitle: '',
        valueBody: ''
    }

    componentDidMount() {
        if (this.props.posts.length === 0) {
            const apiServices = new ApiServices();
            apiServices.getAllPosts()
                .then(data => {
                    this.props.postsLoaded(data);
                    const post = this.props.posts.filter(post => post.id === Number(this.props.id))[0];
                    this.setState({
                        valueTitle: post.title,
                        valueBody: post.body
                    }) 
                });
        } else {
            const post = this.props.posts.filter(post => post.id === Number(this.props.id))[0];
            this.setState({
                valueTitle: post.title,
                valueBody: post.body
            }) 
        }
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
    
    sendEditPost = () => {
        const post = {
            title: this.state.valueTitle,
            body: this.state.valueBody,
            id: this.props.id,
            userId: 1
        }
        this.props.editPost(post)
    }

    render() {

        const editPost = (
            <div>
                <input 
                    type="text" 
                    value={ this.state.valueTitle }
                    onChange={ this.changeValueTitle } />
                <textarea 
                    cols="30" 
                    rows="10" 
                    value={ this.state.valueBody }
                    onChange={ this.changeValueBody } />
                <input 
                    type="button" 
                    value="Редактировать"
                    onClick={ this.sendEditPost } />
            </div>
        )

        return this.props.posts.length !== 0 ? editPost : (<h1>Loading</h1>)
    }
};

const mapStateToProps = ({posts}) => {
    return { posts }
} 

const mapDispatchToProps = dispatch => {
    return {
        postsLoaded: newPosts => {
            dispatch(postsLoaded(newPosts))
        },
        editPost: post => {
            dispatch(editPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
