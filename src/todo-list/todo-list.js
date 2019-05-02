import React, { Component } from 'react';
import TodoItem from './todo-item';
import './index.css';
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            isOpen: false,
        }
    }
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
                                 data={this.props.data}
                                 handleDelete={() => this.props.handleDelete(item.id)}
                                 handleEdit={() => this.handleEdit(item.title)}
                             />
                         )
                     })
                    }
                </ul>
            </div>
        )
    }
}