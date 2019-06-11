import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet, filterByAlphabetReverse } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet, filterByAlphabetReverse, statusFilterByAlphabet }) => {

    const test = statusFilterByAlphabet => {
        if ( statusFilterByAlphabet ) {
            filterByAlphabet();
            filterByAlphabetReverse();
        }
        else {
            filterByAlphabet();
        }
    }

    return (
        <div>
            <input type="button" value="Like" />
            <input type="button" value="Dislike" />
            <input type="button" value="Alph" onClick={ () => test(statusFilterByAlphabet) } />
        </div>
    )
}

const mapStateToProps = ({ statusFilterByAlphabet }) => {
    return { statusFilterByAlphabet }
}

const mapDispatchToProps = dispatch => {
    return {
        filterByAlphabet: () => {
            dispatch(filterByAlphabet())
        },
        filterByAlphabetReverse: () => {
            dispatch(filterByAlphabetReverse())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
