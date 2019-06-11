const postsLoaded = (newPosts) => {
    return {
        type: 'POSTS_LOADED',
        payload: newPosts
    }
}

const deletePost = idPost => {
    return {
        type: 'DELETE_POST',
        payload: idPost
    }
}

const postLoaded = (newPost) => {
    return {
        type: 'POST_LOADED',
        payload: newPost
    }
}

const commentsLoaded = comments => {
    return {
        type: 'COMMENTS_LOADED',
        payload: comments
    }
}

const addNewPost = newPost => {
    return {
        type: 'ADD_NEW_POST',
        payload: newPost
    }
}

const editPost = post => {
    return {
        type: 'EDIT_POST',
        payload: post
    }
}

const setLike = idPost => {
    return {
        type: 'SET_LIKE',
        payload: idPost
    }
}

const loadingPostsComplete = () => {
    return {
        type: 'LOADING_POSTS_COMPLETE'
    }
}

const searchPosts = textPosts => {
    return {
        type: 'SEARCH_POSTS',
        payload: textPosts
    }
}

const addNewComment = newComment => {
    return {
        type: 'ADD_NEW_COMMENT',
        payload: newComment
    }
}

const filterByAlphabet = () => {
    return {
        type: 'FILTER_BY_ALPHABET'
    }
}

const filterByAlphabetReverse = () => {
    return {
        type: 'FILTER_BY_ALPHABET_REVERSE'
    }
}

const filterByLike = () => {
    return {
        type: 'FILTER_BY_LIKE'
    }
}

export {
    postsLoaded,
    deletePost,
    postLoaded,
    commentsLoaded,
    addNewPost,
    editPost,
    setLike,
    loadingPostsComplete,
    searchPosts,
    addNewComment,
    filterByAlphabet,
    filterByAlphabetReverse,
    filterByLike
}
