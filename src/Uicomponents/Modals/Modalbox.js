import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function Modalbox(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove " variant="default">
        <Modal.Header closeButton>
          <Modal.Title>Replace File</Modal.Title>
        </Modal.Header>
        <Modal.Body>A file named Ops Interactive Overview.pptx already exists. Do you want to replace it with the one you are uploading?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary   btn btn-groove" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
           Replace 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modalbox;