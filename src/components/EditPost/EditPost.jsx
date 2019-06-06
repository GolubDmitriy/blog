import React from 'react';
import { connect } from 'react-redux';

import ApiServices from '../../services/apiServices';
import { postsLoaded } from '../../actions/actions';

class EditPost extends React.Component {

    state = {
        valueTitle: '',
        valueBody: ''
    }

    componentDidMount() {
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
    } 
    

    render() {

        const editPost = (
            <div>
                <input type="text" value={ this.state.valueTitle } />
                <textarea cols="30" rows="10" value={ this.state.valueBody }></textarea>
                <input type="button" value="Редактировать" />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
