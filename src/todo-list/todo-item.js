import React , { Component } from 'react';
import './index.css';
import Modal from "../modal-window";
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            isOpen: false,
        }
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    handleEdit = title => {
        this.setState({title: title});
        this.toggleModal();
    };
    render() {
        return(
            <div>
                <li className="item_wrapper">
                    <h6 className="task_name">{this.state.title}</h6>
                    <div>
                        <button className="edit_wrapper" onClick={() => this.handleEdit()}>Edit</button>
                        <button className="delete_wrapper" onClick={this.props.handleDelete}>Delete</button>
                    </div>
                    <Modal handleEdit={this.handleEdit}
                         show={this.state.isOpen}
                         onClose={this.toggleModal}
                         title={this.state.title}>
                    </Modal>
                </li>
            </div>
        )
    }
}
export default TodoItem;