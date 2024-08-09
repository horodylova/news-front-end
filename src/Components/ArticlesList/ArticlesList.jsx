import React, { useEffect, useState } from 'react';
import { fetchArticlesByTopic } from '../../api'; 
import ArticleCard from '../ArticleCard/ArticleCard';
import {ArticleItem, ArticleList} from "../../pages/ArticlesPage/ArticlesPage.styled"


const ArticlesList = ({ selectedTopic }) => {

    const [articles, setArticles] = useState([]);
    console.log(selectedTopic, 'at articlelist');
  
    useEffect(() => {
        fetchArticlesByTopic(selectedTopic)
          .then((response) => {
            setArticles(response.articles)})
          .catch((error) => {
            console.error('Failed to fetch articles:', error);
          });
    }, [selectedTopic]);
  
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
  