import reducer, { initialState } from '../reducers/reduce';

const testPost = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

const testComment = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}

describe('blog reducers', () => {

    it('SET_ERROR_LOADING_COMMENTS', () => {
        
        const action = {
            type: 'SET_ERROR_LOADING_COMMENTS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            errorLoadingComments: true
        })
    })

    it('POSTS_LOADED', () => {
        
        const testPosts = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }]
        
        const action = {
            type: 'POSTS_LOADED',
            payload: testPosts
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: testPosts,
            lastId: 2,
            loadingPosts: false
        })
    })

    it('DELETE_POST', () => {

        initialState.posts = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]

        const action = {
            type: 'DELETE_POST',
            payload: 1
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: []
        })
    })

    it('COMMENTS_LOADED', () => {

        const testComments = [
            {
              "postId": 1,
              "id": 1,
              "name": "id labore ex et quam laborum",
              "email": "Eliseo@gardner.biz",
              "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
              "postId": 1,
              "id": 2,
              "name": "quo vero reiciendis velit similique earum",
              "email": "Jayne_Kuhic@sydney.com",
              "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            }
        ]

        const action = {
            type: 'COMMENTS_LOADED',
            payload: testComments
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            comments: testComments,
            lastIdComments: 2,
            loadingComments: false
        })
    })

    it('ADD_NEW_POST', () => {

        const testNewPost = {
            "postId": 1,
            "id": 1,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        }

        const action = {
            type: 'ADD_NEW_POST',
            payload: testNewPost
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: [...initialState.posts, testNewPost],
            lastId: 1,
        })
    })

    it('EDIT_POST', () => {

        initialState.posts = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]
        
        const newEditPost = {
            "userId": 1,
            "id": 1,
            "title": "test",
            "body": "test"
        }

        const action = {
            type: 'EDIT_POST',
            payload: newEditPost
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: [newEditPost]
        })
    })

    it('SET_LIKE', () => {

        initialState.posts = [testPost]

        const testLikePost = {...testPost, like: true}

        const action = {
            type: 'SET_LIKE',
            payload: 1
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: [testLikePost]
        })
    })

    it('LOADING_POSTS_COMPLETE', () => {

        const action = {
            type: 'LOADING_POSTS_COMPLETE'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loadingPosts: false
        })
    })

    it('SEARCH_POSTS', () => {

        const action = {
            type: 'SEARCH_POSTS',
            payload: 'sunt'
        }

        initialState.posts = [testPost]

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            foundPosts: [testPost],
            isSeacrh: true,
            searchQuery: 'sunt'
        })
    })

    it('ADD_NEW_COMMENT', () => {

        const action = {
            type: 'ADD_NEW_COMMENT',
            payload: testComment
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            comments: [testComment],
            lastIdComments: 1
        })
    })

    it('FILTER_BY_ALPHABET', () => {

        const action = {
            type: 'FILTER_BY_ALPHABET'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByAlphabet: true,
            statusFilterByTime: false
        })
    })

    it('FILTER_BY_ALPHABET_REVERSE', () => {

        const action = {
            type: 'FILTER_BY_ALPHABET_REVERSE'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByAlphabetReverse: true,
            statusFilterByTime: false
        })
    })

    it('FILTER_BY_LIKE', () => {

        const action = {
            type: 'FILTER_BY_LIKE'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByLike: true,
            statusFilterByDislike: false
        })
    })

    it('FILTER_BY_DISLIKE', () => {

        const action = {
            type: 'FILTER_BY_DISLIKE'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByDislike: true,
            statusFilterByLike: false
        })
    })

    it('SET_DISLIKE', () => {

        delete testPost.like

        initialState.posts = [testPost]

        const testDislikePost = {...testPost, dislike: true}

        const action = {
            type: 'SET_DISLIKE',
            payload: 1
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            posts: [testDislikePost]
        })
    })

    it('FILTER_BY_TIME', () => {

        const action = {
            type: 'FILTER_BY_TIME'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByTime: false,
            statusFilterByAlphabet: false,
            statusFilterByAlphabetReverse: false
        })
    })

    it('RESET_ALL_FILTER', () => {

        const action = {
            type: 'RESET_ALL_FILTER'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            statusFilterByAlphabet: false,
            statusFilterByAlphabetReverse: false,
            statusFilterByLike: false,
            statusFilterByDislike: false,
            statusFilterByTime: true
        })
    })

    it('ADD_NUMBER_VISIBLE_POSTS', () => {

        const action = {
            type: 'ADD_NUMBER_VISIBLE_POSTS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            numberVisiblePosts: 20
        })
    })

    it('SHOW_ALL_POSTS', () => {

        initialState.posts = [testPost]

        const action = {
            type: 'SHOW_ALL_POSTS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            numberVisiblePosts: initialState.posts.length
        })
    })

    it('REMOVE_SEARCH_STATUS', () => {

        const action = {
            type: 'REMOVE_SEARCH_STATUS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isSeacrh: false,
            searchQuery: ''
        })
    })

    it('SET_ERROR_LOADING_POSTS', () => {

        const action = {
            type: 'SET_ERROR_LOADING_POSTS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            errorLoadingPosts: true
        })
    })

    it('SET_ERROR_LOADING_COMMENTS', () => {

        const action = {
            type: 'SET_ERROR_LOADING_COMMENTS'
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            errorLoadingComments: true
        })
    })

    it('DELETE_COMMENT', () => {

        initialState.comments = [testComment]

        const action = {
            type: 'DELETE_COMMENT',
            payload: 1
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            comments: []
        })
    })
})
