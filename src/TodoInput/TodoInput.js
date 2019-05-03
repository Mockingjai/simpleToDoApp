import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmitChanges}>
                <input
                    type="input"
                    placeholder="Enter Task"
                    value={this.props.title}
                    onChange={this.props.handleInputChange}
                />
                <button type="submit">
                    Add task
                </button>
            </form>
        )
    }
}
export default TodoInput;