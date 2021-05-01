import React, { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
           className="inputform"
            name="text"
            value={this.state.text}
            placeholder="Your Todo here..."
            onChange={this.handleChange}
          ></input>
          <button className="addtodobtn" onClick={this.handleSubmit}><i class="fa fa-plus" aria-hidden="true" /></button>
        </form>
      </>
    );
  }
}

export default TodoForm;
