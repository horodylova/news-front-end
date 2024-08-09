import React, { useState, useContext } from 'react';
import { postNewComment } from '../../api';
import { AppContext } from '../../contexts/AppContext';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import {
  AddCommentForm,
  CommentInput,
  AddButton,
} from './AddComment.styled';

function AddComment({ article_id, username }) {
    const { commentsList, setCommentsList, loading, setLoading } = useContext(AppContext);
    const [newComment, setNewComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        postNewComment(article_id, username, newComment)
        .then((addedComment) =>  {
            setLoading(false)
            console.log('Added comment:', addedComment);
            setCommentsList((currentList) => {
                return [...currentList, addedComment.comment];  
            });
            toast.success('Comment added successfully!');
            setNewComment(''); 
        })
        .catch(error => {
            setLoading(false)
            toast.error(`Error adding comment: ${error.message}`);        });
    }

    function handleChange(event) {
        setNewComment(event.target.value);
    }

    if (loading) return <Loader />;

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



