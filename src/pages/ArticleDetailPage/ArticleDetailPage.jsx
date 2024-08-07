import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { fetchSingleArticle } from '../../api';
import { AppContext } from '../../contexts/AppContext';
import CommentsList from '../../Components/CommentsList/CommentsList'; 
import RecomendIcon from '../../public/icons/recommended-like.svg';
import Loader from '../../Components/Loader/Loader';
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
  const { loading, setLoading, error, setError } = useContext(AppContext);
  const [article, setArticle] = useState(null); 

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then(data => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        toast.error(`Error: ${err.message}`);
      });
  }, [article_id]);

  if (loading) return <Loader />;
  if (error) return null; 
  if (!article) {
    toast.error('No article found');
    return null;
  } 

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
        <img src={RecomendIcon} alt="recomend icon" />
        <CommentCount>Comments: {article.comment_count}</CommentCount>
      </ArticleContainer>
      <CommentsList article_id={article.article_id} />
    </>
  );
}

export default ArticleDetailPage;


