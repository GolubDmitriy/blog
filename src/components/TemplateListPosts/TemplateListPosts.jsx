import React from 'react';
import { connect } from 'react-redux';

import VisibleBar from '../VisibleBar/VisibleBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SeacrhBar';
import StatusMessageFilter from '../StatusMessageFilter/StatusMessageFilter';

import { removeSearchStatus } from '../../actions/actions';
 
import './TemplateListPosts.css';

const TemplateListPosts = ({ 
        elements=null, 
        resultPosts=[], 
        searchQuery, 
        foundPosts, 
        isSeacrh, 
        statusFilterByLike, 
        statusFilterByDislike,
        removeSearchStatus }) => {

    return (
        <React.Fragment>
            <div className="d-flex justify-content-between template-list-posts">
                <FilterBar />
                <SearchBar />
            </div>
            <StatusMessageFilter
                searchQuery={ searchQuery }
                foundPosts={ foundPosts }
                resultPosts={ resultPosts }
                removeSearchStatus={ removeSearchStatus }
                elements={ elements }
                isSeacrh={ isSeacrh }
                statusFilterByLike={ statusFilterByLike }
                statusFilterByDislike={ statusFilterByDislike } />
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

const mapDispatchToProps = dispatch => {
    return {
        removeSearchStatus: () => {
            dispatch(removeSearchStatus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateListPosts);
