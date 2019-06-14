import React from 'react';
import { Link } from 'react-router-dom';

import InstrumentBar from '../InstrumentBar/InstrumentBar';

import './ListItemPost.css';

const ListItemPost = ({
    title, 
    text, 
    idPost, 
    like, 
    dislike }) => { 

    return (
        <div className="card shadow p-3 mb-5 bg-light rounded">
            <h3 className="card-header">
                <Link to={"/post/" + idPost}>
                        { title }
                </Link>
            </h3>
            <div className="card-body">
                <p className="card-text">{ text }</p>
                <InstrumentBar 
                    idPost={ idPost } 
                    like= { like} 
                    dislike={ dislike } />
            </div>
        </div>
    )
}

export default ListItemPost;
