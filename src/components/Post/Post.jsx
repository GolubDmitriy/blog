import React from 'react';
import { connect } from 'react-redux';

import { postLoaded } from '../../actions/actions';

import ApiServices from '../../services/apiServices';

import ListComments from '../ListComments/ListComments';

import './Post.css';

class Post extends React.Component {

    componentDidMount() {
        const apiServices = new ApiServices();
        apiServices.getPostById(this.props.id)
            .then(post => {
                this.props.postLoaded(post)
            });
        apiServices.getCommentsByPostId(this.props.id)
            .then(comments => {
                console.log(comments)
            })
    }
    
    render() {
        const { post } = this.props

        return (
            <div>
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
                <ListComments />
            </div>
        )
    }
}

const mapStateToProps = ({ post }) => {
    return  { post } 
}

const mapDispatchToProps = dispatch => {
    return {
        postLoaded: newPost => {
            dispatch(postLoaded(newPost))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
