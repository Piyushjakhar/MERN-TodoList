import React from "react";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
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
