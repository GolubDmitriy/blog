import React from 'react';

import { connect } from 'react-redux';

import { commentsLoaded } from '../../actions/actions'

import ApiServices from '../../services/apiServices';

class ListComments extends React.Component {
    
    componentDidMount() {
        const apiServices = new ApiServices();
        apiServices.getCommentsByPostId(this.props.postId)
            .then(comments => {
                this.props.commentsLoaded(comments);
            })
    }
    
    render() {

        const { postId, comments } = this.props;
        console.log(comments);

        return (
            <ul>
                <li>{ postId }</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return  { comments }; 
}

const mapDispatchToProps = dispatch => {
    return {
        commentsLoaded: comments => {
            dispatch(commentsLoaded(comments))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComments);
