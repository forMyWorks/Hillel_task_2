import { Component } from "react";
import { NotificationManager } from "react-notifications";

import Article from "./Article.js";
import ModalWindow from "./ModalWindow.js";

class JsonplaceholderPosts extends Component {
  state = {
    items: [],
    error: null,
    isLoaded: false,
    hidden: true,
    title: "",
    id: null,
    body: null,
  };

  endpoint = "https://jsonplaceholder.typicode.com/posts/";

  componentDidMount() {
    fetch(this.endpoint)
      .then((response) => response.json())
      .then((response) => {
        this.setState(() => {
          return { isLoaded: true, items: response };
        });
      })
      .catch((error) => this.setState(() => ({ isLoaded: true, error })));
  }

  deletingArticle = async (id) => {
    let response = await fetch(this.endpoint + id, {
      method: "DELETE",
    }).catch(() => {
      NotificationManager.error(
        "Does not have access to the server",
        "Error :(",
        2000
      );
    });
    if (response.ok) {
      const arrResponse = this.state.items.filter((item) => id !== item.id);
      this.setState(() => ({
        items: arrResponse,
      }));
      NotificationManager.success("successfully", "Deleted the article!", 2000);
    }
  };

  showModalWindow = (title) => {
    this.setState(() => ({ hidden: false, title }));
  };
  closeModalWindow = () => {
    this.setState(() => ({ hidden: true }));
  };

  findIdAndBody = (id, body) => {
    this.setState(() => ({ id, body }));
  };

  changeTitleJsonplaceholder = async (id) => {
    let response = await fetch(this.endpoint + id, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title: this.state.title,
        body: this.state.body,
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch(() => {
      NotificationManager.error(
        "Does not have access to the server",
        "Error :(",
        2000
      );
    });
    if (response.ok) {
      const arrNewTitle = this.state.items.map((item) => {
        if (id === item.id) {
          item.title = this.state.title;
        }
        return item;
      });
      this.setState(() => ({ items: arrNewTitle }));
      NotificationManager.success("successfully", "Edited!", 2000);
    }
  };

  changeInputTitle = (event) => {
    this.setState(() => ({ title: event.target.value }));
  };

  render() {
    const { error, items, isLoaded, hidden, id, title } = this.state;

    const allPosts = items.map((item, index) => {
      return (
        <Article
          key={index}
          id={item.id}
          title={item.title}
          body={item.body}
          deletingArticle={this.deletingArticle}
          showModalWindow={this.showModalWindow}
          findIdAndBody={this.findIdAndBody}
        />
      );
    });
    const popup = (
      <ModalWindow
        hidden={hidden}
        changeTitleJsonplaceholder={this.changeTitleJsonplaceholder}
        closeModalWindow={this.closeModalWindow}
        changeInputTitle={this.changeInputTitle}
        title={title}
        id={id}
      />
    );

    if (error) {
      return <p> Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Wait...</p>;
    } else {
      return (
        <>
          {popup}
          {allPosts}
        </>
      );
    }
  }
}

export default JsonplaceholderPosts;
