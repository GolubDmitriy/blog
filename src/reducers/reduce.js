const initialState = [];

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

}

export default reducer;
