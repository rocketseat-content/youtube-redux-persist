import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
