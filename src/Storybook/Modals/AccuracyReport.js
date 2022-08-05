import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "./styles.scss"

function AccuracyReport(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} className="modal-groove AccuracyReport" variant="default" >
        <Modal.Header closeButton>
          <Modal.Title>Accuracy Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <p className="mb-4"> Report of Dec 15, 2020  ( From 01/01/2020 to 12/14/2020 )</p>
          <div className="datatable-groove-wrapper  ">
        <Table       className='datatable-groove ' variant="basic"  >
  <thead>
    
    <tr>
      <th>#</th>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>

  </thead>
  <tbody>
  
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
     
    
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</Table>
</div>
          
          
            
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
          Download 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AccuracyReport;