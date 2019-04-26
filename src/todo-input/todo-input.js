import React, { Component } from 'react';
import './index.css';
export default class TodoInput extends Component {
  render() {
      return (
          <div>
              <form onSubmit={this.props.handleSubmit} className="form_wrapper">
                  <div>
                      <input
                          type="text"
                          placeholder="Add Task"
                          value={this.props.item}
                          onChange={this.props.handleChange}
                      />
                  </div>
                  <div className="submit_wrapper">
                      <button type="submit">{this.props.editItem ? 'edit task' : 'add task'}</button>
                  </div>
              </form>
          </div>
      )
  }
};