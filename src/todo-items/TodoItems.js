import React, { Component } from 'react';
import './index.css';
class TodoItems extends Component {
    createTask = item => {
      return (
          <div className="task_element">
              <li className="taskElements" key={item.key}>
                  {item.text}
                  <button key={item.key} onClick={() => this.props.deleteItem(item.key)}>Click to delete</button>
              </li>
          </div>
      )
    };
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTask);
        return (
            <div className="list_wrapper">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
export default TodoItems