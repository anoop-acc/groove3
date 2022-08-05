// Modal box with Left Aligned Content
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function ModalBasicDefault(props) {
    return (
        <Modal show={props.show} onHide={props.onClose} className="modal-groove " variant="default">
        <Modal.Header closeButton>
          <Modal.Title>Replace File</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Box content</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary   btn btn-groove" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
           Replace 
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalBasicDefault;