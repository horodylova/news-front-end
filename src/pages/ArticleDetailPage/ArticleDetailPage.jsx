import React from 'react';
import {useState, useEffect, useParams} from "react";
import { fetchSingleArticle } from '../../api'

function ArticleDetailPage() {
  let    { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        fetchSingleArticle(article_id)
        .then((data) => {
            setArticle(data)
            setLoading(false)
        }).catch((error) => {
          setError(error)
          setLoading(false)
        })

    }, [article_id])
    
  return (
    <div>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
      
    </div>
  )
}

export default ArticleDetailPage