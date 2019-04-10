import React, { Component } from 'react'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }
  render() {
    return (
      <div className="todo">
        <h2>What is your plan for today?</h2>
        <input type="text" />
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
