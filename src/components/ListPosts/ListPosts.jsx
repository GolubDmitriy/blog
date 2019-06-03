import React from 'react';
import Post from '../Post/Post';

import './ListPosts.css';

const ListsPosts = () => {
    
    const arr = [1, 2, 3, 4, 5];

    const elements = arr.map(element => {
        return (
            <li id={ element }>
                <Post number={element}/>
            </li>
        )
    })

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default ListsPosts;
