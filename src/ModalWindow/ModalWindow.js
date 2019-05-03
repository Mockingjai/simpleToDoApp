import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    <input type="text" onChange={this.handleChange} defaultValue={this.state.title}/>
                    <div className="footer">
                        <button onClick={() => this.handleEdit()}>
                            Edit
                        </button>
                        <button>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;