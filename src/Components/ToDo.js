import React, { Component } from 'react'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.todo = JSON.parse(localStorage.getItem("todo")) || [];
  }
  handleSubmit(event) {
    if (event.key === 'Enter') {
      const newItem = event.target.value;
      const allItems = this.state.todo;
      const mergedItems = allItems.concat(newItem);
      this.setState({ todo: mergedItems });
      localStorage.setItem('todo', JSON.stringify(mergedItems));
      event.target.value = "";
    }
  }
  render() {
    return (
      <div className="todo">
        <h2>What is your plan for today?</h2>
        <input type="text" onKeyPress={event => this.handleSubmit(event)} />
        <div className="todo-list">
          <ul>
            {this.state.todo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
