import { Component } from "react";
import { NotificationContainer } from "react-notifications";

import JsonplaceholderPosts from "./JsonplaceholderPosts.js";

class App extends Component {
  render() {
    return (
      <>
        <JsonplaceholderPosts />
        <NotificationContainer />
      </>
    );
  }
}

export default App;
