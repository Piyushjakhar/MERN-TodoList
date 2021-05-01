import React from "react";

const Todo = (props) => (
  <div className="container justify-content-center" style={{display: "flex"}}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        backgroundColor: props.todo.complete ? "grey" : "#40E0D0",
      }}
      onClick={props.toggleComplete} 
      className="todoStyle"
    >
      {props.todo.text}
    </div>
    <div>
      <button className="deletetodobtn" onClick={props.onDelete}><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
  </div>
);

export default Todo;
