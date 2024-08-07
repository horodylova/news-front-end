import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../contexts/AppContext';
import { fetchArticles } from '../../api'; 
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Loader from '../../Components/Loader/Loader'

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
 const {loading, setLoading, error, setError} = useContext(AppContext)

  useEffect(() => {
    setLoading(true);
    fetchArticles()
      .then(data => {
        setArticles(data.articles);  
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        toast.error(`Error: ${err.message}`);
      });
  }, []);

  if (loading) return <Loader/>;
  if (error) return null;

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
