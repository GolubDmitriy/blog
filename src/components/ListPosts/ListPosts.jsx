import React from 'react';
import { connect } from 'react-redux';

import ListItemPost from '../ListItemPost/ListItemPost';

import './ListPosts.css';

class ListsPosts extends React.Component {

    // componentDidMount() {
    //     const apiServices = new ApiServices();
    //     apiServices.getAllPosts()
    //         .then(data => {
    //             this.props.postsLoaded(data)
    //         });
    // }

    render() {

        const { posts }  = this.props;

        const elements = posts.map(post => {
            return (
                <li key={ post.id }>
                    <ListItemPost
                        idPost = { post.id } 
                        title={ post.title }
                        text={ post.body }
                    />
                </li>
            )
        })

        return (
            <ul>
                { elements }
            </ul>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return  { posts }; 
}

export default connect(mapStateToProps)(ListsPosts);
