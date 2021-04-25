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
        <h1>Add Your Todo's Here</h1>
        <div>
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
        <div>
          Todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>

        <div>
          <button onClick={this.deleteCompleted}>Delete completed</button>
        </div>
      </>
    );
  }
}

export default TodoList;
