import React , { Component } from 'react';
import './index.css';
export default class TodoItem extends Component {
    render() {
        return(
            <div>
                <li className="item_wrapper">
                    <h6 className="task_name">{this.props.title}</h6>
                    <div>
                        <span className="edit_wrapper" onClick={this.props.handleEdit}>Edit</span>
                        <span className="delete_wrapper" onClick={this.props.handleDelete}>Delete</span>
                    </div>
                </li>
            </div>
        )
    }
}