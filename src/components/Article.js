import { Component } from "react";

class Article extends Component {
  render() {
    return (
      <>
        <div className="wrap-article">
          <div
            className="wrap-article_title"
            onClick={() => {
              this.props.showModalWindow(this.props.title);
              this.props.findIdAndBody(this.props.id, this.props.body);
            }}
          >
            {this.props.title}
          </div>
          <div className="wrap-article_body">{this.props.body}</div>

          <button
            className="wrap-article_btn"
            onClick={(event) => {
              this.props.deletingArticle(this.props.id);
            }}
          >
            Delete the article
          </button>
        </div>
      </>
    );
  }
}

export default Article;
