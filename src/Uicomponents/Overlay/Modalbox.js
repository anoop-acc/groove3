import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {ReactComponent as Angleright} from "./images/angle-right.svg"

function Modalbox(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove">
        <Modal.Header closeButton>
          <Modal.Title>Add New Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary btn-sm btn btn-groove" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="dark btn-sm btn btn-groove" onClick={props.onClose}>
           Next <Angleright className="btn-icon svgicon-light ms-2" />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modalbox;