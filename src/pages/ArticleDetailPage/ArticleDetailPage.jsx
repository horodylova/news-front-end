import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { fetchSingleArticle } from '../../api';
import { AppContext } from '../../contexts/AppContext';
import CommentsList from '../../Components/CommentsList/CommentsList'; 
import Loader from '../../Components/Loader/Loader';
import VotesSection from '../../Components/VotesSection/VotesSection';
import AddComment from '../../Components/AddComment/AddComment'
import {
  ArticleContainer,
  Title,
  Author,
  CreatedAt,
  Image,
  Topic,
  Body,
  CommentCount,
} from './ArticleDetailPage.styled';

function ArticleDetailPage() {
  const { article_id } = useParams();
  const { loading, setLoading, error, setError, isLogin, user } = useContext(AppContext);
  const [article, setArticle] = useState(null); 

  console.log(user.username, 'on the page');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await fetchSingleArticle(article_id);
        setArticle(data.article);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        toast.error(`Error: ${error.message}`);
      }
    };

    fetchArticle();
  }, [article_id, setLoading, setError]);

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
        <VotesSection article_id={article.article_id} votes={article.votes} />
        <CommentCount>Comments: {article.comment_count}</CommentCount>
      </ArticleContainer>
      {isLogin ? <AddComment article_id={article.article_id} username={user.username} /> : null}
      <CommentsList article_id={article.article_id} />
    </>
  );
}

export default ArticleDetailPage;




