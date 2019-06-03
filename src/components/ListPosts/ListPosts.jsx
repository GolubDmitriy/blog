import React from 'react';
import Post from '../Post/Post';
import ApiServices from '../../services/apiServices'

import './ListPosts.css';

export default class ListsPosts extends React.Component {

    apiServices = new ApiServices();
    
    state = {
        posts: []
    }

    updatePosts = () => {
        this.apiServices.getAllPosts().then(data => {
            this.setState({
                posts: data
            });
        });
    }

    constructor() {
        super();
        console.log(this.state);
        this.updatePosts();
    }

    render() {
        const { posts }  = this.state;

        const elements = posts.map(post => {
            return (
                <li key={ post.id }>
                    <Post 
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
