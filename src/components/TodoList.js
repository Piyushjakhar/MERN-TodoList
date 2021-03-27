import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
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

  updateTodoToShow = (s) => {
    this.setState({
      todosToShow: s,
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
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <>
        <div>
          <TodoForm onSubmit={this.addTodo} />
          {todos.map((todo) => (
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
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            Completed
          </button>
        </div>
        <div>
          <button onClick={this.deleteCompleted}>Delete completed</button>
        </div>
      </>
    );
  }
}

export default TodoList;
