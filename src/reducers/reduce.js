const initialState = {
    posts: []
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                posts: action.payload
            };
        default:
            return state;
    }

}

export default reducer;
