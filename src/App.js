import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Piyush's Todo List</h1>
      <a href="/auth/google">Sign In With Google</a>
      <TodoList />
    </div>
  );
}

export default App;
