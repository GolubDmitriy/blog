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

export {
    postsLoaded,
    deletePost,
    postLoaded,
    commentsLoaded,
    addNewPost,
    editPost,
    setLike
}
