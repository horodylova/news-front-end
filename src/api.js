import axios from 'axios' 

const api = axios.create({
    baseURL: 'https://news-api-1-jrxe.onrender.com/api',
  });
  
  export const fetchArticles = (params = {}) => {
    return api
      .get("/articles", { params })
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching articles: ${error.response?.data?.message || error.message}`);
      });
  };

  export const fetchSingleArticle = (article_id) => {
    return api 
    .get(`/articles/${article_id}`)
    .then(({data}) => data)
    .catch((error) => {
        throw new Error(`Error fetching articles: ${error.response?.data?.message || error.message}`);

    })
  }