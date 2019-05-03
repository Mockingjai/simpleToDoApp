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
                                isModalOpen={this.props.isModalOpen}
                                handleDelete={() => this.props.handleDelete(item.id)}
                                handleEdit={this.props.handleEdit}
                                handleChange={this.props.handleChange}
                                toggleModal={this.props.toggleModal}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default TodoList;