import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';  
import { fetchArticlesByTopic } from '../../api'; 
import ArticleCard from '../ArticleCard/ArticleCard';
import { AppContext } from '../../contexts/AppContext';
import Loader from '../../Components/Loader/Loader';  
import { ArticleItem, ArticleList } from "../../pages/ArticlesPage/ArticlesPage.styled";

const ArticlesList = ({ selectedTopic }) => {
  const { loading, setLoading } = useContext(AppContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticlesByTopic(selectedTopic)
      .then((response) => {
        setArticles(response.articles);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`Failed to fetch articles: ${error.message}`);  
      });
  }, [selectedTopic, setLoading]);

  if (loading) return <Loader />;

  if (!selectedTopic) {
    return <p>Please select a topic to see the articles.</p>;
  }

  return (
    <ArticleList>
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleItem key={article.article_id}>
            <ArticleCard
              article_id={article.article_id}
              title={article.title}
              author={article.author}
              created_at={article.created_at}
              votes={article.votes}
              article_img_url={article.article_img_url}
              topic={article.topic}
              comment_count={article.comment_count}
            />
          </ArticleItem>
        ))
      ) : (
        <p>No articles found for this topic.</p>
      )}
    </ArticleList>
  );
};

export default ArticlesList;
