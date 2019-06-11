import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet, filterByAlphabetReverse, filterByLike } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet, filterByAlphabetReverse, statusFilterByAlphabet, filterByLike }) => {

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
            <input type="button" value="Like" onClick={ filterByLike } />
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
        },
        filterByLike: () => {
            dispatch(filterByLike())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
