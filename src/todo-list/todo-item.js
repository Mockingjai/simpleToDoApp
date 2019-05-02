import React , { Component } from 'react';
import './index.css';
import Modal from "../modal-window";
class TodoItem extends Component {
    render() {
        return(
            <div>
                <li className="item_wrapper">
                    <h6 className="task_name">{this.props.title}</h6>
                    <div>
                        <button className="edit_wrapper" onClick={this.props.handleChange}>Edit</button>
                        <button className="delete_wrapper" onClick={this.props.handleDelete}>Delete</button>
                    </div>
                    <Modal show={this.props.isOpen}
                         // onClose={this.toggleModal}
                         title={this.props.title}>
                    </Modal>
                </li>
            </div>
        )
    }
}
export default TodoItem;