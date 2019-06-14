import React from 'react';

import VisibleBar from '../VisibleBar/VisibleBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SeacrhBar';

const TemplateListPosts = ({ elements, resultPosts=[] }) => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <FilterBar />
                <SearchBar />
            </div>
            <ul className="list-group">
                { elements }
            </ul>
            <VisibleBar maxNumberVisible={ resultPosts.length } />
        </React.Fragment>
    )
}

export default TemplateListPosts;
