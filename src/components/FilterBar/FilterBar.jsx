import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet }) => {
    return (
        <div>
            <input type="button" value="Like" />
            <input type="button" value="Dislike" />
            <input type="button" value="Alph" onClick={ filterByAlphabet } />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        filterByAlphabet: () => {
            dispatch(filterByAlphabet())
        } 
    }
}

export default connect(null, mapDispatchToProps)(FilterBar);
