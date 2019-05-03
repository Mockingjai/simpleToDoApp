import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import './index.css';
class TodoList extends Component{
    render() {
        return (
            <div className='list_wrapper'>
                <h4 className='todoList_header'>TodoList</h4>
                {
                    this.props.data.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                data={this.props.data}
                                isModalOpen={this.props.isModalOpen}
                                handleDelete={() => this.props.handleDelete(item.id)}
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