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

export {
    postsLoaded,
    deletePost
}
