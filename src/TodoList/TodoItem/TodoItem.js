import React, { Component } from 'react';
import Modal from './ModalWindow/ModalWindow';
class TodoItem extends Component {
    render() {
        return(
            <div>
                {
                    this.props.data.map(listItem => {
                        return (
                            <div>
                            <li
                                style={{listStyle: 'none'}}
                                key={listItem.id}>
                                {this.props.title}
                                <button onClick={() => this.props.handleDeleteTask(listItem.id)}>Delete task</button>
                                <button onClick={() => this.props.handleEditTask()}>Edit</button>
                            </li>
                            <Modal
                                isModalOpen={this.props.isModalOpen}
                                title={listItem.title}
                                handleInputChange={this.props.handleInputChange}
                                handleEditTask={this.props.handleEditTask}
                            />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoItem;