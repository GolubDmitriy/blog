import React from 'react';
import { connect } from 'react-redux';

import { filterByAlphabet, 
         filterByAlphabetReverse, 
         filterByLike, 
         filterByDislike, 
         filterByTime,
         resetAllFilter } from '../../actions/actions';

const FilterBar = ({ filterByAlphabet, 
        filterByAlphabetReverse, 
        statusFilterByAlphabet, 
        filterByLike, 
        filterByDislike, 
        filterByTime, 
        resetAllFilter,
        statusFilterByTime,
        statusFilterByDislike,
        statusFilterByLike,
        statusFilterByAlphabetReverse }) => {

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
        <div className="btn-group">
            <input 
                type="button" 
                value="Like" 
                onClick={ filterByLike } 
                className={statusFilterByLike ? "nav-item btn btn-info" : "nav-item btn btn-outline-info"}/>
            <input 
                type="button" 
                value="Dislike" 
                onClick={ filterByDislike } 
                className={statusFilterByDislike ? "nav-item btn btn-info" : "nav-item btn btn-outline-info"}/>
            <input 
                type="button" 
                value={ statusFilterByAlphabetReverse ? "По алфавиту Z-A" : "По алфавиту A-Z" } 
                onClick={ () => test(statusFilterByAlphabet) } 
                className={statusFilterByAlphabet ? "nav-item btn btn-info" : "nav-item btn btn-outline-info" }/>
            <button 
                type="button" 
                onClick={ filterByTime } 
                className="nav-item btn btn-outline-info">
                {statusFilterByTime ? "Cначала старые" : "Сначала новые"}
            </button>
            <button 
                type="button" 
                onClick={ resetAllFilter } 
                className="nav-item btn btn-outline-info">
                Снять все фильтры
            </button>
        </div>
    )
}

const mapStateToProps = ({ 
        statusFilterByAlphabet, 
        statusFilterByTime, 
        statusFilterByDislike,
        statusFilterByLike,
        statusFilterByAlphabetReverse }) => {
    return { 
        statusFilterByAlphabet, 
        statusFilterByTime, 
        statusFilterByDislike,
        statusFilterByLike,
        statusFilterByAlphabetReverse }
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
        },
        resetAllFilter: () => {
            dispatch(resetAllFilter())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
