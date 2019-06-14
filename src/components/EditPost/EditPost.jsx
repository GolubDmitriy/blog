import React from 'react';
import { connect } from 'react-redux';

import ApiServices from '../../services/apiServices';
import { postsLoaded, editPost } from '../../actions/actions';

class EditPost extends React.Component {

    state = {
        valueTitle: '',
        valueBody: '',
        errorBody: false,
        errorTitle: false,
        errorLoading: false,
        completEditPost: false
    }

    componentDidMount() {
        if (this.props.loadingPosts) {
            const apiServices = new ApiServices();
            apiServices.getAllPosts()
                .then(data => {
                    this.props.postsLoaded(data);
                    const post = this.props.posts.filter(post => Number(post.id) === Number(this.props.id))[0];
                    try {
                        this.setState({
                            valueTitle: post.title,
                            valueBody: post.body
                        }) 
                    }
                    catch {
                        this.setState({
                            errorLoading: true
                        })
                    }
                });
        } else {
            const post = this.props.posts.filter(post => Number(post.id) === Number(this.props.id))[0];
            try {
                this.setState({
                    valueTitle: post.title,
                    valueBody: post.body
                }) 
            }
            catch {
                this.setState({
                    errorLoading: true
                })
            }
        }
    } 

    changeValueTitle = event => {
        this.setState({
            valueTitle: event.target.value,
            completEditPost: false
        })
    }

    changeValueBody = event => {
        this.setState({
            valueBody: event.target.value,
            completEditPost: false
        })
    }
    
    sendEditPost = event => {
        event.preventDefault();
        if ( this.state.valueBody.length > 3 && this.state.valueTitle.length > 3 ) {
            const newPost = {
                title: this.state.valueTitle,
                body: this.state.valueBody,
                id: this.props.id,
                userId: 1
            }
            this.props.editPost(newPost);
            this.setState({
                completEditPost: true
            })
        } 
        this.setState({
            errorTitle: this.state.valueTitle.length <= 3 ? true : false,
            errorBody: this.state.valueBody.length <= 3 ? true : false
        })
    }

    render() {

        if ( this.props.errorLoadingPosts ) {
            return null;
        }

        if ( this.state.errorLoading ) {
            return (<h4>Упс, не удалось найти этот пост...</h4>)
        }

        const success =  (
                <div className="alert alert-success" role="alert">
                    <strong>Успех!</strong> Пост изменен.
                </div>
            )

        const editPost = (
            <div>
                { this.state.completEditPost ? success : null }
                <form onSubmit={ this.sendEditPost }>
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
                            placeholder="Содержимое поста" 
                            value={ this.state.valueBody }
                            onChange={ this.changeValueBody }
                            className="form-control"
                            id="body-new-post"
                            rows="20" />
                        { this.state.errorBody ? <p className="text-danger">Содержимое поста должна содержать хотя бы 4 символа.</p> : null }
                    </div>
                    <input type="submit" value="Изменить" />
                </form>
            </div>
        )

        return this.props.loadingPosts ? (<h1>Loading...</h1>) : editPost
    }
};

const mapStateToProps = ({ posts, loadingPosts, errorLoadingPosts }) => {
    return { posts, loadingPosts, errorLoadingPosts }
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
