
// Modal box with Center Aligned Content
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import circlecheck from "./images/circle-check.svg"

function ModalBasicCenter(props) {
    return (
      <Modal show={props.show} onHide={props.onClose} 
      className="modal-groove modal-groove-plain ">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={circlecheck} className="w-auto icon-middle mb-3"  />
          <h2>File  Saved!</h2>
          <p>Your file has been saved, it can be reached in the Dashboard</p>
           </Modal.Body>
        <Modal.Footer>          
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
          Back to Dashboard 
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalBasicCenter;