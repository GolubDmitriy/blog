export default class ApiService {

    async getResource(url) {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error('Не удалось получить информацию от сервера')
        }
    
        return await res.json();
    }

    getAllPosts() {
        return this.getResource('https://jsonplaceholder.typicode.com/posts')
    }

    getAllComments() {
        return this.getResource('https://jsonplaceholder.typicode.com/comments');
    }

}
