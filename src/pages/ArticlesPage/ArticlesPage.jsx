import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../api'; 
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then(data => {
        setArticles(data.articles);  
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.article_id}>
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
            </li>  
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
