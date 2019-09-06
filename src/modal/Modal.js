import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class ModalOverlay extends React.Component {
  render() {
    return (
      <div>
          <Modal isOpen={this.props.show} contentLabel="test-modal">
            <button className="modal-exit-button" onClick={this.props.exit}>
              {" "}
              Exit View
            </button>
            <h1>{this.props.info}</h1>
          </Modal>
      </div>
    );
  }
}

export default ModalOverlay;