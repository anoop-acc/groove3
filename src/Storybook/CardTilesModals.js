import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import cardinside from "../Uicomponents/Images/cards/card1smin.png"
import cardCenter from "../Uicomponents/Images/cards/cardCenter.png"

import Modalbox from "./Modals/Modalbox.js"
import ModalboxPlain from "./Modals/ModalboxPlain.js"
import ModalAccuracyReport from "./Modals/AccuracyReport.js"
import AddmultipleClients from "./Modals/AddmultipleClients.js"
import GetStartedModal from "./Modals/GetStarted.js"

import basicmodal from "../Uicomponents/Images/cards/basicmodal.png"
import replacefile from "../Uicomponents/Images/cards/replacefile.png"
import leavingwithout from "../Uicomponents/Images/cards/leavingwithout.png"
import accuracy from "../Uicomponents/Images/cards/accuracy.png"
import addmultiple from "../Uicomponents/Images/cards/addmultiple.png"
import getstarted from "../Uicomponents/Images/cards/getstarted.png"
import enhancment from "../Uicomponents/Images/cards/enhancment.png"

import Panel from "./Panels/Panel"
import PanelWithIcon from "./Panels/PanelWithIcon"

function CardTilesModals(props) {

    const [modalshow1, setShow1] = React.useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);

    const [modalshow2, setShow2] = React.useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    const [AccuracyReport, setShow3] = React.useState(false);
    const handleShow3 = () => setShow3(true);
    const handleClose3 = () => setShow3(false);

    const [AddmultipleClient, setShow4] = React.useState(false);
    const handleShow4 = () => setShow4(true);
    const handleClose4 = () => setShow4(false);

    const [GetStarted, setShow5] = React.useState(false);
    const handleShow5 = () => setShow5(true);
    const handleClose5 = () => setShow5(false);


const codeModalbasic =`import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalboxPlain(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose} 
      className="modal-groove modal-groove-plain ">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image path} className="w-auto icon-middle mb-3"  />
          <h2>File  Saved!</h2>
          <p>Your file has been saved, it can be reached in the Dashboard</p>
           </Modal.Body>
        <Modal.Footer>          
          <Button variant="dark   btn btn-groove" onClick={props.onClose}>
          Back to Dashboard 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalboxPlain;

//Import Component

const [modalshow, setShow] = React.useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

<ModalboxPlain show={modalshow} onClose={handleClose} />

`



    const carddefault = `<Card className='card-groove' variant="shadow"></Card>
<Card className='card-groove' variant="outline"></Card>
<Card className='card-groove' variant="shadow outline"></Card>`

    return (
        <div>
            <h1>Tiles</h1>
            <Row className='mb-4'>
                <Col md="4"><h3>Default: Shadow</h3>
                    <Card className='card-groove' variant="shadow">
                        <img src={cardinside} />
                    </Card>
                </Col>
                <Col md="4"><h3>Alternate: Outline </h3>
                    <Card className='card-groove' variant="outline"><img src={cardinside} /></Card>
                </Col>
                <Col md="4"><h3>Alternate Shadow with Outline </h3>
                    <Card className='card-groove' variant="shadow outline"><img src={cardinside} /></Card>
                </Col>
            </Row>
            <pre class="codeview">
                {carddefault}
            </pre>
            <h2 className='my-4'>Modals</h2>
            <Row>
                <Col md="3">
                    <Card className='card-groove' variant="shadow">
                        <img src={cardCenter} className="w-100" />
                    </Card>
                </Col>
            </Row>
            <h2 className='my-4'>Basic Modal</h2>
            <Row className='mb-4'>
                <Col md="8">
                    <Card className='card-groove modalsample' variant="shadow" onClick={handleShow2} >
                        <img src={basicmodal} className="w-100" />
                    </Card>
                    <ModalboxPlain show={modalshow2} onClose={handleClose2} />
                    <pre className="codeview my-4">
                        {codeModalbasic}
                    </pre>
                </Col>

            </Row>

            <Row className='mb-4'>
                <Col md="5">
                    <Card className='card-groove modalsample' variant="shadow">
                        <img src={replacefile} className="w-100" onClick={handleShow1} />
                    </Card>
                    <Modalbox show={modalshow1} onClose={handleClose1} />

                </Col>
                <Col md="5">
                    <Card className='card-groove modalsample' variant="shadow">
                        <img src={leavingwithout} className="w-100" />

                    </Card>
                </Col>
            </Row>
            <h2 className='my-4'>Complex Modals</h2>
            <Row className='mb-4'>
                <Col md="7">
                    <Card className='card-groove modalsample' variant="shadow" onClick={handleShow3} ><img src={accuracy} className="w-100" /></Card>
                    <ModalAccuracyReport show={AccuracyReport} onClose={handleClose3} />
                </Col>
            </Row>

            <Row >
                <Col md="9">
                    <Card className='card-groove modalsample' variant="shadow" onClick={handleShow4} ><img src={addmultiple} className="w-100" /></Card>
                    <AddmultipleClients show={AddmultipleClient} onClose={handleClose4} />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md="5">
                    <Card className='card-groove modalsample' variant="shadow" onClick={handleShow5}>   <img src={getstarted} className="w-100" /></Card>
                    <GetStartedModal show={GetStarted} onClose={handleClose5} />

                </Col>
                <Col md="4">
                    <Card className='card-groove modalsample' variant="shadow">   <img src={enhancment} className="w-100" /></Card>
                </Col>
            </Row>
            <h3 className='my-4'>Panels</h3>

            <Row>
                <Col md="6">
                    <Panel/>                    
                </Col>
                <Col md="6"><PanelWithIcon />    </Col>
            </Row>

        </div>
    );
}

export default CardTilesModals;