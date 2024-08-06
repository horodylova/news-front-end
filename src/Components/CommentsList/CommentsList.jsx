import React, { useState, useEffect } from 'react';
import { fetchComments } from '../../api';
import {
  CommentsContainer,
  CommentItem,
  CommentAuthor,
  CommentBody,
  CommentDate,
} from './CommentsList.styled';

function CommentsList({ article_id }) {
  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments(article_id)
      .then(data => {
        setCommentsList(data.comments);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CommentsContainer>
      <h2>Comments</h2>
      <ul>
        {commentsList.map(comment => (
          <CommentItem key={comment.comment_id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentBody>{comment.body}</CommentBody>
            <CommentDate>{new Date(comment.created_at).toLocaleDateString()}</CommentDate>
          </CommentItem>
        ))}
      </ul>
    </CommentsContainer>
  );
}

export default CommentsList;


