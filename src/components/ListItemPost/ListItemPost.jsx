import React from 'react';
import { Link } from 'react-router-dom';

import InstrumentBar from '../InstrumentBar/InstrumentBar';

import './ListItemPost.css';

class ListItemPost extends React.Component { 

    render() {
        const {
            title, 
            text, 
            idPost, 
            like, 
            dislike 
            } = this.props;
                   
        return (
            <div className="post-mini">
                <div className="post-mini-title">
                    <h3>
                        <Link to={"/post/" + idPost}>
                            { title }
                        </Link>
                    </h3>
                </div>
                <div className="post-mini-body">
                    { text }
                </div>
                <InstrumentBar 
                        idPost={ idPost } 
                        like= { like} 
                        dislike={ dislike } />
            </div>
        )
    };
}

export default ListItemPost;
