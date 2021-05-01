import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  render() {
    return (
      <>
        <h1 className="cursiveFont">Add Your Todo's Here</h1>
        <div style={{marginBottom: "20px"}}>
        <a href="/">Logout</a>
        </div>
        
          <div className="row justify-content-center">
              <div className="todoleft">
                Todos left: {this.state.todos.filter((todo) => !todo.complete).length}
              </div>

              <div className="deletecomplete">
                <button onClick={this.deleteCompleted}>Delete completed</button>
              </div>
          </div>
        

        <div style={{marginBottom: "10px"}}>
          <TodoForm onSubmit={this.addTodo} />
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              todo={todo}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            />
          ))}
        </div>

      </>
    );
  }
}

export default TodoList;
