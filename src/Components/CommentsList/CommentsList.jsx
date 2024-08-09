import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchComments } from "../../api";
import { AppContext } from "../../contexts/AppContext";
import Loader from "../Loader/Loader";
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
    loading,
    setLoading,
    error,
    setError,
    commentsList,
    setCommentsList,
    isLogin
  } = useContext(AppContext);

  useEffect(() => {
    fetchComments(article_id)
      .then((data) => {
        setCommentsList(data.comments);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        toast.error(`Error: ${err.message}`);
      });
  }, [article_id]);

  if (loading) return <Loader />;
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
              <DeleteCommentComponent comment_id={comment.comment_id} />
            ) : null}
          </CommentItem>
        ))}
      </ul>
    </CommentsContainer>
  );
}

export default CommentsList;
