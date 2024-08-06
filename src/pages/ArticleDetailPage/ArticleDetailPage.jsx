import React from 'react';
import {useState, useEffect} from "react";
import { fetchSingleArticle } from '../../api'

function ArticleDetailPage() {

    useEffect(() => {
        fetchSingleArticle()
        .then((data) => {
            return data
        })

    }, [article_id])
    
  return (
    <div>ArticleDetailPage</div>
  )
}

export default ArticleDetailPage