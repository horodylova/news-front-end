import React, { useState, useContext } from 'react';
import { postNewComment } from '../../api';
import { AppContext } from '../../contexts/AppContext';
import {
  AddCommentForm,
  CommentInput,
  AddButton,
} from './AddComment.styled';

function AddComment({ article_id, username }) {
    const { commentsList, setCommentsList } = useContext(AppContext);
    const [newComment, setNewComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        postNewComment(article_id, username, newComment)
        .then((addedComment) =>  {
            console.log('Added comment:', addedComment);
            setCommentsList((currentList) => {
                return [...currentList, addedComment.comment];  
            });
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
        <AddCommentForm onSubmit={handleSubmit}>
            <label htmlFor="comment">Add your comment:</label>
            <CommentInput
                type="text"
                value={newComment}
                onChange={handleChange}  
                id="comment"
            />
            <AddButton type="submit">Add</AddButton>
        </AddCommentForm>
    );
}

export default AddComment;



