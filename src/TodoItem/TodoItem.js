import React, { Component } from 'react';
import './index.css';
import edit from './edit.png';
import _delete from './delete.png';
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
                <li className='item_wrapper'>
                    <div className='task_wrapper'>
                        <h5>{this.state.title}</h5>
                        <div className='buttons'>
                            <img className='edit-img' onClick={() => this.props.toggleModal()} src={edit} alt='edit'/>
                            <img className='delete-img' onClick={this.props.handleDelete} src={_delete} alt="delete"/>
                        </div>
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