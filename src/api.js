import axios from 'axios' 

const api = axios.create({
    baseURL: 'https://news-api-1-jrxe.onrender.com/api',
  });
  
  export const fetchArticles = (params = {}) => {
    const validQueries = ['sort_by', 'order', 'topic', 'author', 'title', 'article_id', 'created_at', 'votes', 'article_img_url', 'comment_count'];
  
    const filteredParams = Object.keys(params)
      .filter(key => validQueries.includes(key))
      .reduce((obj, key) => {
        obj[key] = params[key];
        return obj;
      }, {});
  
    return api
      .get("/articles", { params: filteredParams })
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching articles: ${error.response?.data?.message || error.message}`);
      });
  };
  

  export const fetchSingleArticle = (article_id) => {
    return api
      .get(`/articles/${article_id}`)
      .then(({ data }) => data)
      .catch((error) => {
        throw new Error(`Error fetching article: ${error.response?.data?.message || error.message}`);
      });
  };

  export const fetchComments = (article_id) => {
    return api
      .get(`/articles/${article_id}/comments`)
      .then(({ data }) => data) 
      .catch((error) => {
        throw new Error(`Error fetching comments: ${error.response?.data?.message || error.message}`);
      });
  };

  export const deleteComment = (comment_id) => {
    return api
    .delete(`/comments/${comment_id}`)
    .then(({data}) => data)
    .catch((error) => {
      throw new Error(`Error deleting comments: ${error.response?.data?.message || error.message}`);
    });
  }

  export const patchArticleByVote = async (article_id, inc_votes) => {
    const response = await api.patch(`/articles/${article_id}`, { inc_votes });
    return response.data;
  };

  export const fetchUserById = (username) => {
    return api.get(`/users/${username}`).then(({ data }) => {
       return data;
    });
 };
 
 export const postNewComment = (article_id, username, newComment) => {
  const comment = {
      author: username,
      body: newComment
  };

  return axios
      .post(`https://news-api-1-jrxe.onrender.com/api/articles/${article_id}/comments`, comment)
      .then(({ data }) => data)
      .catch(error => {
          throw new Error(`Failed to post comment: ${error.message}`);
         
      });
};
 

export const fetchTopics = () => {
  return api 
  .get("/topics")
  .then (({data}) => data)
  .catch(error => {
      throw new Error(`Failed to get topics: ${error.message}`);
     
  });
}

export const fetchArticlesByTopic = (topic) => {
  return api
  .get(`/articles?topic=${topic}`)
   .then(({ data }) => data)
    .catch(error => {
      throw new Error(`Failed to get articles on the topic: ${error.message}`);
    });
}