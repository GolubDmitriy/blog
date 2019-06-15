import React from 'react';
import { connect } from 'react-redux';

import VisibleBar from '../VisibleBar/VisibleBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SeacrhBar';

import './TemplateListPosts.css';

const TemplateListPosts = ({ elements=null, resultPosts=[], searchQuery, foundPosts, isSeacrh }) => {
    
    const searchMessageFound = (
        <div class="alert alert-dark" role="alert">
            По запросу <strong>{ searchQuery }</strong> найдено: { foundPosts.length } 
        </div>
    )

    const searchMessageNotFound = (
        <div class="alert alert-dark" role="alert">
            По запросу <strong>{ searchQuery }</strong> ничего не найдено
        </div>
    )

    const searchMessage = isSeacrh && foundPosts.length !== 0 ? searchMessageFound : searchMessageNotFound
    
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between template-list-posts">
                <FilterBar />
                <SearchBar />
            </div>
            { searchQuery ? searchMessage : null }
            <ul className="list-group list-posts">
                { elements }
            </ul>
            <VisibleBar maxNumberVisible={ resultPosts.length } />
        </React.Fragment>
    )
}

const mapStateToProps = ({ foundPosts, searchQuery, isSeacrh }) => {
    return { foundPosts, searchQuery, isSeacrh }
}

export default connect(mapStateToProps)(TemplateListPosts);
