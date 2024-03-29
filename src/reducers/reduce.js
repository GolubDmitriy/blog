export const initialState = {
    posts: [],
    comments: [],
    like: {},
    loadingPosts: true,
    loadingComments: true,
    foundPosts: [],
    lastId: 0,
    statusFilterByAlphabet: false,
    statusFilterByAlphabetReverse: false,
    statusFilterByLike: false,
    statusFilterByDislike: false,
    lastIdComments: 0,
    statusFilterByTime: true,
    numberVisiblePosts: 10,
    isSeacrh: false,
    searchQuery: '',
    errorLoadingPosts: false,
    errorLoadingComments: false
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload,
                lastId: action.payload.reduce((a, b) => {
                    return (Number(a.id) > Number(b.id) ? Number(a.id) : Number(b.id))
                }),
                loadingPosts: false
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => Number(post.id) !== Number(action.payload)),
                foundPosts: state.foundPosts.filter(post => Number(post.id) !== Number(action.payload))
            };
        case 'COMMENTS_LOADED':
            return {
                ...state,
                comments: action.payload,
                lastIdComments: action.payload.reduce((a, b) => {
                    return (Number(a.id) > Number(b.id) ? Number(a.id) : Number(b.id))
                }),
                loadingComments: false
            };
        case 'ADD_NEW_POST':
            action.payload.id = state.lastId + 1;
            return {
                ...state,
                posts: [...state.posts, action.payload],
                lastId: ++state.lastId
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
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (Number(post.id) === Number(action.payload)) {
                        if (post.like) {
                            delete post.like
                        } else {
                            post.like = true
                            delete post.dislike
                        }
                    }
                    return post;
                })
            }
        case 'LOADING_POSTS_COMPLETE':
            return {
                ...state,
                loadingPosts: false
            };
        case 'SEARCH_POSTS':
            return {
                ...state,
                foundPosts: state.posts.filter(post => {
                    if (~post.title.toLowerCase().indexOf(action.payload.toLowerCase()) || 
                        ~post.body.toLowerCase().indexOf(action.payload.toLowerCase())) {
                        return true;
                    }
                    return false;
                }),
                isSeacrh: true,
                searchQuery: action.payload
            };
        case 'ADD_NEW_COMMENT':
            action.payload.id = state.lastIdComments + 1;
            return {
                ...state,
                comments: [...state.comments, action.payload],
                lastIdComments: ++state.lastIdComments
            };
        case 'FILTER_BY_ALPHABET':
            return {
                ...state,
                statusFilterByAlphabet: true,
                statusFilterByTime: false
            };
        case 'FILTER_BY_ALPHABET_REVERSE':
            return {
                ...state,
                statusFilterByAlphabetReverse: !state.statusFilterByAlphabetReverse,
                statusFilterByTime: false
            };
        case 'FILTER_BY_LIKE':
            return {
                ...state,
                statusFilterByLike: !state.statusFilterByLike,
                statusFilterByDislike: false
            };
        case 'FILTER_BY_DISLIKE':
            return {
                ...state,
                statusFilterByDislike: !state.statusFilterByDislike,
                statusFilterByLike: false
            };
        case 'SET_DISLIKE':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (Number(post.id) === Number(action.payload)) {
                        if (post.dislike) {
                            delete post.dislike
                        } else {
                            post.dislike = true
                            delete post.like
                        }
                    }
                    return post;
                })
            };
        case 'FILTER_BY_TIME':
            return {
                ...state,
                statusFilterByTime: !state.statusFilterByTime,
                statusFilterByAlphabet: false,
                statusFilterByAlphabetReverse: false
            };
        case 'RESET_ALL_FILTER':
            return {
                ...state,
                statusFilterByAlphabet: false,
                statusFilterByAlphabetReverse: false,
                statusFilterByLike: false,
                statusFilterByDislike: false,
                statusFilterByTime: true
            };
        case 'ADD_NUMBER_VISIBLE_POSTS':
            return {
                ...state,
                numberVisiblePosts: state.numberVisiblePosts + 10
            };
        case 'SHOW_ALL_POSTS':
            return {
                ...state,
                numberVisiblePosts: state.posts.length
            };
        case 'REMOVE_SEARCH_STATUS':
            return {
                ...state,
                isSeacrh: false,
                searchQuery: ''
            };
        case 'SET_ERROR_LOADING_POSTS':
            return {
                ...state,
                errorLoadingPosts: true
            };
        case 'SET_ERROR_LOADING_COMMENTS':
            return {
                ...state,
                errorLoadingComments: true
            };
        case 'DELETE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter(comment => Number(comment.id) !== Number(action.payload))
            };
        default:
            return state;
    }

}

export default reducer;
