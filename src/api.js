import axios from 'axios' 

const api  = axios.create({
    baseURL: 'https://news-api-1-jrxe.onrender.com',
})

export const fetchArticles = (params = {}) => {
    return api
    .get("/articles", {params})
    .then(({data}) => {
        return data
    })
}