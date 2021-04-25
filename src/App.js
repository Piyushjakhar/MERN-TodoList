import React from "react";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <TodoList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
