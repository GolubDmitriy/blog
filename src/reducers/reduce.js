const initialState = {
    posts: [],
    post: {},
    comments: [],
    like: {},
    loadingPosts: true,
    loadingComments: true,
    foundPosts: [],
    lastId: 0,
    statusFilterByAlphabet: false
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
        case 'POST_LOADED':
            return {
                ...state,
                post: action.payload
            };
        case 'COMMENTS_LOADED':
            return {
                ...state,
                comments: action.payload,
                loadingComments: false
            };
        case 'ADD_NEW_POST':
            action.payload.id = state.lastId + 1;
            state.posts.push(action.payload);
            return {
                ...state,
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
        case 'ADD_NEW_COMMENT':
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case 'FILTER_BY_ALPHABET':
            // const clone_posts = [...state.posts];
            // clone_posts.sort((a, b) => {
            //     const post1 = a.title.toLowerCase();
            //     const post2 = b.title.toLowerCase();

            //     let comparison = 0;
            //     if (post1 > post2) {
            //         comparison = 1;
            //     } else {
            //         comparison = -1;
            //     }
            //     return comparison;
            // })
            
            // return {
            //     ...state,
            //     posts: clone_posts
            // }
            return {
                ...state,
                statusFilterByAlphabet: true
            }
        default:
            return state;
    }

}

export default reducer;
