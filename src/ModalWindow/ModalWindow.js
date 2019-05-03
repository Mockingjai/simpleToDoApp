import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
        }
    }
    handleChange = e => {
        this.setState({
            title: e.target.value
        })
    };
    handleEdit = () => {
        this.props.handleEdit(this.state.title);
    };
    render() {
        console.log(this.props.title);
        // Render nothing if the "show" prop is false
        if(!this.props.isModalOpen) {
            return null;
        }
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <p className='window_title'>Change task or left old task</p>
                    <input className='input_field' type="text" onChange={this.handleChange} defaultValue={this.state.title}/>
                    <div className="footer">
                        <button className='action_buttons' onClick={() => this.handleEdit()}>
                            Edit
                        </button>
                        <button className='action_buttons' >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;