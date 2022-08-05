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
       
      <th>Description</th>
      <th>Count</th>
      
    </tr>

  </thead>
  <tbody>
  
    <tr>
     
      <td>Total URN</td>
      <td>4725</td>
      
    </tr>
     
    
    <tr>
     
      <td>Total Fields</td>
      <td>56712</td>
       
    </tr>
    <tr>
     
      <td>Total OCR Captured Fields (OCR, Rubber band, Manual)</td>
      <td>40334</td>
      
    </tr>
    <tr>
    
      <td>Total Manual/SYSTEM Fields (Auto Populated/Derived Field)</td>
      <td>16378</td>
     
    </tr>
    <tr>
       
      <td>OCR Captured Automatically</td>
      <td>37675</td>
      
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