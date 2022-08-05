import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


function GetStarted(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove " variant="default">
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Quae fuerit causa, mox videro; interea hoc epicurus in armatum hostem impetum fecisse. In oculis quidem faciunt, ut summum malum dolorem, idque instituit docere sic: omne. Probabo, inquit, modo ista sis aequitate, quam ob aliquam quaerat voluptatem ut enim.<br/>
Sed ut enim maxime placeat, facere nondum depravatum ipsa iudicari etenim quoniam detractis.
<div className="mt-5">
<Form.Check className='checkbox-groove'                   
                  label="I agree to the {<a>terms and conditions</a>}"
                  name="group1"
                  //type={type}
                //   id={`inline-${type}-1`}
                />
<Form.Check className='checkbox-groove'                 
                  label="I would like to be sent updates via email"
                  name="group1"
                  //type={type}
                //   id={`inline-${type}-1`}
                />
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary   btn btn-groove" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
           Continue 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GetStarted;