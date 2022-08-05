import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "./styles.scss"

function AddmultipleClients(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove AccuracyReport" variant="default" >
        <Modal.Header closeButton>
          <Modal.Title>Add multiple clients</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <Row>
                <Col md="8"></Col>
                <Col md="4">
                    <h5>Drag and drop</h5>
                    <p>Drop any .pdf, .doc, .exe, or browse your files.</p>
                    <div className="d-flex">
                        <Button variant="outline-secondary   btn btn-groove me-3" onClick={props.onClose}>Cancel</Button>
                    <Button variant="dark   btn btn-groove" onClick={props.onClose}>Save</Button>
                    </div>
                    </Col>
            </Row>
        
        </Modal.Body>
     
      </Modal>
    </div>
  );
}

export default AddmultipleClients;