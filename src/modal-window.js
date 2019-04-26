import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
class Modal extends React.Component {
    state = {item: this.props.title};
    hanldeChange = e => {
      this.setState({
          item: e.target.value
      })
    };
    handleEdit = e => {
        console.log(this.state.item);
        this.props.onClose()
    };
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <input type="text" onChange={this.hanldeChange} value={this.props.title}/>
                    <div className="footer">
                        <button onClick={() => this.handleEdit(this.state.item)}>Edit</button>
                        <button onClick={this.props.onClose}>
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