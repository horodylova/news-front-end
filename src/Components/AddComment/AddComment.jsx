import React, { useState } from 'react';
import { postNewComment } from '../../api';

function AddComment({ article_id, username }) {
    const [newComment, setNewComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        postNewComment(article_id, username, newComment)
            .then(() => {
                setNewComment('');  
            })
            .catch(error => {
                console.error('Error adding comment:', error.message);
            });
    }

    function handleChange(event) {
        setNewComment(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Add your comment:</label>
            <input
                type="text"
                value={newComment}
                onChange={handleChange}  
                id="comment"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddComment;


