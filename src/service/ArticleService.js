import axios from "axios";

const ARTICLE_REST_API_URL = "http://localhost:8080/api/articles";

class ArticleService {
  getArticle = () => {
    console.log("rest 사용중");
    return axios.get(ARTICLE_REST_API_URL);
  };
}

export default new ArticleService();
