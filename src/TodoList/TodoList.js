import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component{
    render() {
        return (
            <div>
                <h4>TodoList</h4>
                {
                    this.props.data.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                data={this.props.data}
                                handleDelete={() => this.props.handleDelete(item.id)}
                                handleEdit={() => this.props.handleEdit(item.id)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default TodoList;