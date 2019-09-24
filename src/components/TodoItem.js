import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#eee",
      padding: "10px",
      borderBottom: "2px solid #333",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "green" : "#1d1d1d",
      margin: "2rem auto",
      width: "80%"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div className="items" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  padding: "1px 4px",
  borderRadius: "2px%",
  border: "none",
  float: "right",
  cursor: "pointer"
};

export default TodoItem;
