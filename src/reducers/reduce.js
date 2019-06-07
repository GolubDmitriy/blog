const initialState = {
    posts: [],
    post: {},
    comments: [],
    like: {},
    loadingPosts: true,
    foundPosts: [],
    lastId: 0
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload,
                lastId: action.payload.reduce((a, b) => {
                    return (Number(a.id) > Number(b.id) ? Number(a.id) : Number(b.id))
                })
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
        case 'ADD_NEW_POST':
            action.payload.id = ++state.lastId;
            state.posts.push(action.payload);
            return {
                ...state,
                lastId: state.lastId
            }
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (Number(post.id) === Number(action.payload.id)) {
                        return action.payload;
                    }
                    return post;
                })
            };
        case 'SET_LIKE':
            state.like[action.payload] = 1 
            return state;
        case 'LOADING_POSTS_COMPLETE':
            return {
                ...state,
                loadingPosts: false
            };
        case 'SEARCH_POSTS':
            return {
                ...state,
                foundPosts: state.posts.filter(post => {
                    if (~post.title.indexOf(action.payload) || ~post.body.indexOf(action.payload)) {
                        return true;
                    }
                    return false;
                })
            };
        default:
            return state;
    }

}

export default reducer;
