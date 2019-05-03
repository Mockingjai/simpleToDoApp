import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter task"
                        defaultValue={this.props.title}
                        onChange={this.props.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        )
    }
}
export default TodoInput;