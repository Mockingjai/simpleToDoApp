import React, { Component } from 'react';
import TodoItem from './todo-item';
import './index.css';
export default class TodoList extends Component {
    render() {
        return(
            <div>
                <ul>
                    <h3 style={{fontFamily: 'monospace', fontSize: '22px'}}>TodoList</h3>
                    {
                     this.props.data.map(item => {
                         return (
                             <TodoItem
                                 key={item.id}
                                 title={item.title}
                                 handleDelete={() => this.props.handleDelete(item.id)}
                                 handleEdit={() => this.props.handleEdit(item.id)}
                             />
                         )
                     })
                    }
                </ul>
            </div>
        )
    }
}