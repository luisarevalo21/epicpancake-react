import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "../../components/Spinner/Spinner";

class modal extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Modal show={this.props.show}>
        <Spinner />
      </Modal>
    );
  }
}

export default modal;
