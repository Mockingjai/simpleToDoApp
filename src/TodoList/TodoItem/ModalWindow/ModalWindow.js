import React from 'react';
import PropTypes from 'prop-types';
class Modal extends React.Component {
    render() {
        if(!this.props.isModalOpen) {
            return null;
        }
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <input type="text"  onChange={this.props.handleInputChange} defaultValue={this.props.title} />
                    <div className="footer">
                        <button onClick={() => this.props.handleEditTask(this.props.title)}>Edit</button>
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