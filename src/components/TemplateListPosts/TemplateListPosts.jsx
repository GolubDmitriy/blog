import React from 'react';
import { connect } from 'react-redux';

import VisibleBar from '../VisibleBar/VisibleBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SeacrhBar';

import './TemplateListPosts.css';

const TemplateListPosts = ({ 
        elements=null, 
        resultPosts=[], 
        searchQuery, 
        foundPosts, 
        isSeacrh, 
        statusFilterByLike, 
        statusFilterByDislike }) => {
    
    const searchMessageFound = (
        <div className="alert alert-info" role="alert">
            По запросу <strong>{ searchQuery }</strong> найдено: { foundPosts.length } 
        </div>
    )

    const searchMessageNotFound = (
        <div className="alert alert-dark" role="alert">
            По запросу <strong>{ searchQuery }</strong> ничего не найдено
        </div>
    )

    const filterMessageLikeFound = (
        <div className="alert alert-success" role="alert">
            Вы поставили лайк постам: <strong>{ elements ? elements.length : null }</strong> 
        </div>
    )

    const filterMessageLikeNotFound = (
        <div className="alert alert-success" role="alert">
            Постов, которым Вы поставили лайк нет
        </div>
    )

    const filterMessageDislikeFound = (
        <div className="alert alert-danger" role="alert">
            Вы поставили дизлайк постам: <strong>{ elements ? elements.length : null }</strong> 
        </div>
    )

    const filterMessageDislikeNotFound = (
        <div className="alert alert-danger" role="alert">
            Постов, которым Вы поставили дизлайк нет
        </div>
    )

    const filterMessageLike = elements ? filterMessageLikeFound : filterMessageLikeNotFound

    const filterMessageDislike = elements ? filterMessageDislikeFound : filterMessageDislikeNotFound

    const searchMessage = isSeacrh && foundPosts.length !== 0 ? searchMessageFound : searchMessageNotFound
    
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between template-list-posts">
                <FilterBar />
                <SearchBar />
            </div>
            { searchQuery ? searchMessage : null }
            { statusFilterByLike ? filterMessageLike : null }
            { statusFilterByDislike ? filterMessageDislike : null }
            <ul className="list-group list-posts">
                { elements }
            </ul>
            <VisibleBar maxNumberVisible={ resultPosts.length } />
        </React.Fragment>
    )
}

const mapStateToProps = ({ 
        foundPosts, 
        searchQuery, 
        isSeacrh, 
        statusFilterByLike, 
        statusFilterByDislike }) => {
    return { 
        foundPosts, 
        searchQuery, 
        isSeacrh, 
        statusFilterByLike, 
        statusFilterByDislike 
    }
}

export default connect(mapStateToProps)(TemplateListPosts);
