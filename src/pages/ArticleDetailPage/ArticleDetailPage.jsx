import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from '../../api';
import CommentsList from '../../Components/CommentsList/CommentsList'; 
import {
  ArticleContainer,
  Title,
  Author,
  CreatedAt,
  Image,
  Topic,
  Body,
  Votes,
  CommentCount,
} from './ArticleDetailPage.styled';

function ArticleDetailPage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then(data => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!article) return <div>No article found</div>;

  return (
    <>
      <ArticleContainer>
        <Title>{article.title}</Title>
        <Author>{article.author}</Author>
        <CreatedAt>{new Date(article.created_at).toLocaleDateString()}</CreatedAt>
        <Image src={article.article_img_url} alt={`Image for ${article.title}`} />
        <Topic>{article.topic}</Topic>
        <Body>{article.body}</Body>
        <Votes>Votes: {article.votes}</Votes>
        <CommentCount>Comments: {article.comment_count}</CommentCount>
      </ArticleContainer>
      <CommentsList article_id={article.article_id} />
    </>
  );
}

export default ArticleDetailPage;

