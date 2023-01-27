import { Component } from "react";

class Article extends Component {
  state = { disabled: false };

  render() {
    return (
      <>
        <div key={this.props.key} className="wrap-article">
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
            disabled={this.state.disabled}
            onClick={() => {
              if (!this.state.disabled) {
                this.props.deletingArticle(this.props.id);
                this.setState({ disabled: true });
              }
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
