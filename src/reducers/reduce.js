const initialState = {
    posts: [],
    post: {},
    comments: []
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'POST_LOADED':
            return {
                ...state,
                post: action.payload
            };
        case 'COMMENTS_LOADED':
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }

}

export default reducer;
