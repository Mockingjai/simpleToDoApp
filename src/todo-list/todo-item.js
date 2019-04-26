import React , { Component } from 'react';
import './index.css';
class TodoItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <li className="item_wrapper">
                    <h6 className="task_name">{this.props.title}</h6>
                    <div>
                        <button className="edit_wrapper" onClick={this.props.handleEdit}>Edit</button>
                        <button className="delete_wrapper" onClick={this.props.handleDelete}>Delete</button>
                    </div>
                </li>
            </div>
        )
    }
}
export default TodoItem;