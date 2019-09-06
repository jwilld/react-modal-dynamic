import React from "react";
import ModalOverlay from "../modal/modal";

class ModalContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      exampleInfo:''
    }
}
  handleShowModal = title => {
    this.setState(this.toggleShowModal);
    if (this.state.showModal === false) {
      this.setState({
        exampleInfo: title
      });
    }
  };

  toggleShowModal = state => {
    return {
      showModal: !state.showModal
    };
  };

  render() {
    const examples = [{
        'info':'example 1','title':'example 1'
    },{'info':'example 2','title':'example2'},{'info':'example 3','title':'example 3'}]
    let exampleClick = examples.map((example, i) => (
      <button key={i} onClick={() => this.handleShowModal(example.title)} className="portfolio-box">
        {example.title}
      </button>
    ));
    return (
        <div>
        {exampleClick}
    
        <ModalOverlay
          show={this.state.showModal}
          exit={this.handleShowModal}
          info={this.state.exampleInfo}
        />
        </div>
    )
  }
}
export default ModalContainer;