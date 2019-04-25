import React, { Component } from 'react';
import './index.css';
class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return(
            <div className="todolist_wrapper">
                <div>
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit" className="smb_btn">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList;