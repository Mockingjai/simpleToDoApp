import React, { Component } from 'react';
import Modal from "../ModalWindow/ModalWindow";

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
        }
    }
    handleEdit = title => {
        this.setState({title: title});
        this.props.toggleModal();
    };
    render() {
        return (
            <div>
                <li>
                    <h5>{this.state.title}</h5>
                    <div>
                        <button onClick={() => this.handleEdit()}>Edit task</button>
                        <button onClick={this.props.handleDelete}>Delete task</button>
                    </div>
                    <div>
                        <Modal
                            isModalOpen={this.props.isModalOpen}
                            title={this.state.title}
                            handleEdit={this.handleEdit}
                            // handleChange={this.props.handleChange}
                        />
                    </div>
                </li>
            </div>
        )
    }
}
export default TodoItem;