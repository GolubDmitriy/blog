import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet, filterByAlphabetReverse, filterByLike, filterByDislike } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet, filterByAlphabetReverse, statusFilterByAlphabet, filterByLike, filterByDislike }) => {

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
            <input type="button" value="Dislike" onClick={ filterByDislike } />
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
        },
        filterByDislike: () => {
            dispatch(filterByDislike())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
