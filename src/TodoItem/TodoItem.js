import React, { Component } from 'react';

class TodoItem extends Component{
    render() {
        return (
            <div>
                <li>
                    <h5>{this.props.title}</h5>
                    <div>
                        <button onClick={this.props.handleEdit}>Edit task</button>
                        <button onClick={this.props.handleDelete}>Delete task</button>
                    </div>
                </li>
            </div>
        )
    }
}
export default TodoItem;