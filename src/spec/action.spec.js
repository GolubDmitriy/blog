import * as action from '../actions/actions';

const testPosts = {
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

describe('blog actionc', () => {

    it('ACTION_POSTS_LOADED', () => {
            
        const actionPostsLoaded = {
            type: 'POSTS_LOADED',
            payload: [ testPosts ]
        }

        expect(action.postsLoaded([testPosts])).toEqual(actionPostsLoaded)
    })

    it('ACTION_DELETE_POST', () => {
            
        const actionDeletePost = {
            type: 'DELETE_POST',
            payload: 1
        }

        expect(action.deletePost(1)).toEqual(actionDeletePost)
    })

    it('ACTION_COMMENTS_LOADED', () => {
            
        const actionCommentsLoaded = {
            type: 'COMMENTS_LOADED',
            payload: [ testComment ]
        }

        expect(action.commentsLoaded([testComment])).toEqual(actionCommentsLoaded)
    })

    it('ACTION_ADD_NEW_POST', () => {
            
        const actionAddNewPost = {
            type: 'ADD_NEW_POST',
            payload: [ testPosts ]
        }

        expect(action.addNewPost([testPosts])).toEqual(actionAddNewPost)
    })

    it('ACTION_EDIT_POST', () => {
            
        const actionEditPost = {
            type: 'EDIT_POST',
            payload: testPosts
        }

        expect(action.editPost(testPosts)).toEqual(actionEditPost)
    })

    it('ACTION_SET_LIKE', () => {
            
        const actionSetLike = {
            type: 'SET_LIKE',
            payload: 1
        }

        expect(action.setLike(1)).toEqual(actionSetLike)
    })

    it('ACTION_LOADING_POSTS_COMPLETE', () => {
            
        const actionLoadingPostsComplete = {
            type: 'LOADING_POSTS_COMPLETE',
        }

        expect(action.loadingPostsComplete()).toEqual(actionLoadingPostsComplete)
    })

    it('ACTION_SEARCH_POSTS', () => {
            
        const actionSearchPosts = {
            type: 'SEARCH_POSTS',
            payload: 'sunt'
        }

        expect(action.searchPosts('sunt')).toEqual(actionSearchPosts)
    })

    it('ACTION_ADD_NEW_COMMENT', () => {
            
        const actionAddNewComment = {
            type: 'ADD_NEW_COMMENT',
            payload: testComment
        }

        expect(action.addNewComment(testComment)).toEqual(actionAddNewComment)
    })

    it('ACTION_FILTER_BY_ALPHABET', () => {
            
        const actionFilterByAlphabet = {
            type: 'FILTER_BY_ALPHABET',
        }

        expect(action.filterByAlphabet()).toEqual(actionFilterByAlphabet)
    })

    it('ACTION_FILTER_BY_ALPHABET_REVERSE', () => {
            
        const actionFilterByAlphabetReverse = {
            type: 'FILTER_BY_ALPHABET_REVERSE',
        }

        expect(action.filterByAlphabetReverse()).toEqual(actionFilterByAlphabetReverse)
    })

    it('ACTION_FILTER_BY_LIKE', () => {
            
        const actionFilterByLike = {
            type: 'FILTER_BY_LIKE',
        }

        expect(action.filterByLike()).toEqual(actionFilterByLike)
    })

    it('ACTION_FILTER_BY_DISLIKE', () => {
            
        const actionFilterByDislike = {
            type: 'FILTER_BY_DISLIKE',
        }

        expect(action.filterByDislike()).toEqual(actionFilterByDislike)
    })

    it('ACTION_SET_DISLIKE', () => {
            
        const actionSetDislike = {
            type: 'SET_DISLIKE',
            payload: 1
        }

        expect(action.setDislike(1)).toEqual(actionSetDislike)
    })

    it('ACTION_FILTER_BY_TIME', () => {
            
        const actionFilterByTime = {
            type: 'FILTER_BY_TIME',
        }

        expect(action.filterByTime()).toEqual(actionFilterByTime)
    })

    it('ACTION_RESET_ALL_FILTER', () => {
            
        const actionResetAllFilter = {
            type: 'RESET_ALL_FILTER',
        }

        expect(action.resetAllFilter()).toEqual(actionResetAllFilter)
    })

    it('ACTION_ADD_NUMBER_VISIBLE_POSTS', () => {
            
        const actionAddNumberVisiblePosts = {
            type: 'ADD_NUMBER_VISIBLE_POSTS',
        }

        expect(action.addNumberVisiblePosts()).toEqual(actionAddNumberVisiblePosts)
    })

    it('ACTION_SHOW_ALL_POSTS', () => {
            
        const actionShowAllPosts = {
            type: 'SHOW_ALL_POSTS',
        }

        expect(action.showAllPosts()).toEqual(actionShowAllPosts)
    })

    it('ACTION_REMOVE_SEARCH_STATUS', () => {
            
        const actionRemoveSearchStatus = {
            type: 'REMOVE_SEARCH_STATUS',
        }

        expect(action.removeSearchStatus()).toEqual(actionRemoveSearchStatus)
    })

    it('ACTION_SET_ERROR_LOADING_POSTS', () => {
            
        const actionSetErrorLoadingPosts = {
            type: 'SET_ERROR_LOADING_POSTS',
        }

        expect(action.setErrorLoadingPosts()).toEqual(actionSetErrorLoadingPosts)
    })

    it('ACTION_SET_ERROR_LOADING_COMMENTS', () => {
            
        const actionSetErrorLoadingComments = {
            type: 'SET_ERROR_LOADING_COMMENTS',
        }

        expect(action.setErrorLoadingComments()).toEqual(actionSetErrorLoadingComments)
    })

    it('ACTION_DELETE_COMMENT', () => {
            
        const actionDeleteComment = {
            type: 'DELETE_COMMENT',
            payload: 1
        }

        expect(action.deleteComment(1)).toEqual(actionDeleteComment)
    })
})
