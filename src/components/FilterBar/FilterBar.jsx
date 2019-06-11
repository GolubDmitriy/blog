import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet, filterByAlphabetReverse, filterByLike, filterByDislike, filterByTime } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet, filterByAlphabetReverse, statusFilterByAlphabet, filterByLike, filterByDislike, filterByTime }) => {

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
            <button type="button" onClick={ filterByTime }>Последние</button>
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
        },
        filterByTime: () => {
            dispatch(filterByTime())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
