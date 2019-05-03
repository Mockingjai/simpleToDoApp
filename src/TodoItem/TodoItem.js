import React, { Component } from 'react';
import Modal from "../ModalWindow/ModalWindow";

class TodoItem extends Component {
    handleEdit = title => {
        this.props.toggleModal();
    }
    render() {
        return (
            <div>
                <li>
                    <h5>{this.props.title}</h5>
                    <div>
                        <button onClick={() => this.handleEdit()}>Edit task</button>
                        <button onClick={this.props.handleDelete}>Delete task</button>
                    </div>
                    <div>
                        <Modal
                            isModalOpen={this.props.isModalOpen}
                            title={this.props.title}
                            handleEdit={this.props.handleEdit}
                            // handleChange={this.props.handleChange}
                        />
                    </div>
                </li>
            </div>
        )
    }
}
export default TodoItem;