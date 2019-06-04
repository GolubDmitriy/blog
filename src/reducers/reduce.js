const initialState = {
    posts: []
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                posts: action.payload
            };
        case 'DELETE_POST':
            return {
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        default:
            return state;
    }

}

export default reducer;
