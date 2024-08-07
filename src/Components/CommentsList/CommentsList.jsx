import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchComments } from "../../api";
import { AppContext } from "../../contexts/AppContext";
import DeleteCommentComponent from "../DeleteCommentComponent/DeleteCommentComponent.jsx";
import {
  CommentsContainer,
  CommentItem,
  CommentAuthor,
  CommentBody,
  CommentDate,
} from "./CommentsList.styled";

function CommentsList({ article_id }) {
  const {
  
    error,
    setError,
    commentsList,
    setCommentsList,
    isLogin, 
    user
  } = useContext(AppContext);

  useEffect(() => {
     
    fetchComments(article_id)
      .then((data) => {
        setCommentsList(data.comments);
        
      })
      .catch((err) => {
        setError(err);
        
        toast.error(`Error: ${err.message}`);
      });
  }, [article_id]);

  
  if (error) return null;

  return (
    <CommentsContainer>
      <h2>Comments</h2>
      <ul>
        {commentsList.map((comment) => (
          <CommentItem key={comment.comment_id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentBody>{comment.body}</CommentBody>
            <CommentDate>
              {new Date(comment.created_at).toLocaleDateString()}
            </CommentDate>
            {isLogin ? (
              <DeleteCommentComponent 
              comment_id={comment.comment_id}
              commentAuthor={comment.author} 
              currentUser={user.username} 
              />
            ) : null}
          </CommentItem>
        ))}
      </ul>
    </CommentsContainer>
  );
}

export default CommentsList;
