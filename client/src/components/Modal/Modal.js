import React from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "../Spinner/Spinner";

const modal = props => (
  <Modal show={props.show} onHide={props.hide} centered>
    <Spinner />
  </Modal>
);

export default modal;
