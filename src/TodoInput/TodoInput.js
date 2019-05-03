import React, { Component } from 'react';
import './index.css';
class TodoInput extends Component {
    render() {
        return (
            <div className='todo_input_wrapper'>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <input className='input_field'
                            type="text"
                            placeholder="Enter task"
                            value={this.props.title}
                            onChange={this.props.handleChange}
                        />
                        <button type="submit" className='submit_button'>Add Task</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default TodoInput;