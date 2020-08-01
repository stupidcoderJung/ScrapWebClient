import React from "react";
import articleService from "../service/ArticleService";

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    articleService.getArticle().then((response) => {
      console.log(response.data);
      this.setState({ articles: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">article</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>id</td>
              <td>newscompany</td>
              <td>title</td>
              <td>topornot</td>
              <td>pageNumber</td>
            </tr>
          </thead>
          <tbody>
            {this.state.articles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.newcompany}</td>
                <td>{article.title}</td>
                <td>{article.topornot}</td>
                <td>{article.pagenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ArticleComponent;
