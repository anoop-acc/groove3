import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import modalicon from "../Images/Overlay/modalicon.png"

function ModalboxPlain(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove modal-groove-plain ">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalicon} className="w-auto" />
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Aenean ultrices bibendum mollis. Sed aliquet, enim at vulputate porttitor, felis nunc vehicula ante, blandit lobortis mi massa</p>
          <p>ultrices bibendum mollis. Sed aliquet, enim at vulputate porttitor, felis nunc vehicula ante, blandit lobortis mi massa non leo. Sed dui enim, interdum non rhoncus vitae, blandit eu eros. Nulla facilisi.</p>
          </Modal.Body>
        <Modal.Footer>
          
          <Button variant="dark btn-sm btn btn-groove" onClick={props.onClose}>
           Get Started Now!  
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalboxPlain;