import React from 'react';

const NewPost = () => {
    return (
        <div>
            <form onSubmit={(event) => {
                    event.preventDefault()
                    console.log(666)}}>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="body" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewPost;
