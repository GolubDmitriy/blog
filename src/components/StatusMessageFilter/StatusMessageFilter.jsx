import React from 'react';

const StatusMessageFilter = ({ 
        searchQuery,
        foundPosts,
        resultPosts,
        removeSearchStatus,
        elements,
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
            Вы поставили лайк постам: <strong>{ resultPosts.length !== 0 ? resultPosts.length : null }</strong> 
        </div>
    )

    const filterMessageLikeNotFound = (
        <div className="alert alert-success" role="alert">
            Постов, которым Вы поставили лайк нет
        </div>
    )

    const filterMessageDislikeFound = (
        <div className="alert alert-danger" role="alert">
            Вы поставили дизлайк постам: <strong>{ resultPosts.length !== 0 ? resultPosts.length : null }</strong> 
        </div>
    )

    const filterMessageDislikeNotFound = (
        <div className="alert alert-danger" role="alert">
            Постов, которым Вы поставили дизлайк нет
        </div>
    )

    const messageRemoveSearchStatus = (
        <div className="alert alert-warning" role="alert" onClick={ removeSearchStatus }>
            Для отмены режима поиска щелкните по этому сообщению
        </div>
    )

    const filterMessageLike = elements ? filterMessageLikeFound : filterMessageLikeNotFound

    const filterMessageDislike = elements ? filterMessageDislikeFound : filterMessageDislikeNotFound

    const searchMessage = isSeacrh && foundPosts.length !== 0 ? searchMessageFound : searchMessageNotFound
    
    return (
        <React.Fragment>
            { searchQuery ? searchMessage : null }
            { statusFilterByLike ? filterMessageLike : null }
            { statusFilterByDislike ? filterMessageDislike : null }
            { isSeacrh ? messageRemoveSearchStatus : null }
        </React.Fragment>
    )
}

export default StatusMessageFilter;
