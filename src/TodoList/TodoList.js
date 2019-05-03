import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
class TodoList extends Component {
    render() {
        return(
            <TodoItem
                data={this.props.data}
                title={this.props.title}
                handleDelete={this.props.handleDelete}
            />
        )
    }
}

export default TodoList;