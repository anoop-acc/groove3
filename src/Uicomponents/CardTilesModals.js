import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import cardinside from "../Uicomponents/Images/cards/card1smin.png"
import cardCenter from "../Uicomponents/Images/cards/cardCenter.png"


import Modalbox from "./Modals/Modalbox.js"
import ModalboxPlain from "./Modals/ModalboxPlain.js"
import ModalAccuracyReport from "./Modals/AccuracyReport.js"
import AddmultipleClients from "./Modals/AddmultipleClients.js"
import GetStartedModal from "./Modals/GetStarted.js"

import basicmodal from "./Images/cards/basicmodal.png"
import replacefile from "./Images/cards/replacefile.png"
import leavingwithout from "./Images/cards/leavingwithout.png"
import accuracy from "./Images/cards/accuracy.png"
import addmultiple from "./Images/cards/addmultiple.png"
import getstarted from "./Images/cards/getstarted.png"
import enhancment from "./Images/cards/enhancment.png"

// import cardinside from "./Images/cards/card1smin.png"
// import cardCenter from "./Images/cards/cardCenter.png"
// import notifications from "./Images/cards/notifications.png"
// import basicmodal from "./Images/cards/basicmodal.png"
// import replacefile from "./Images/cards/replacefile.png"
// import leavingwithout from "./Images/cards/leavingwithout.png"
// import accuracy from "./Images/cards/accuracy.png"
// import addmultiple from "./Images/cards/addmultiple.png"
// import getstarted from "./Images/cards/getstarted.png"
// import enhancment from "./Images/cards/enhancment.png"

import Panel from "./Panels/Panel"
import PanelWithIcon from "./Panels/PanelWithIcon"


//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

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



    //Get Code Toggle
    const [codedivActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!codedivActive)
    };

    return (

        <>
           <div class="bodyrhs-section-gray mb-0 pb-0  ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-lg-5 text-start '>
          <h1 className='mb-3 pagetitle'>{props.title}   
          <div>        
              <span className='ms-auto mt-4  d-flex'>
                <NavLink className="transparent me-3  " to="/CoreuigrooveLanding/UiComponents"> <button className='btn-pagesub active'  variant="outline-dark" size="sm">Overview</button></NavLink>
                <NavLink className="transparent me-3 " to=""  > <button className={`btn-pagesub ${codedivActive ? "" : "active"}`} variant="outline-dark" size="sm" onClick={handleToggle}>{codedivActive ? "Get Code" : "Hide Code"}</button></NavLink>
                <NavLink className="transparent " to=""> <button className='btn-pagesub' variant="outline-dark" size="sm">Accessibility</button></NavLink>
              </span>
              </div>
            </h1>
		  </Col>
		  </Row>
</div>
        <div class="bodyrhs-section-plain">
            <Row className="container-fluid  mx-auto p-0">
                <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                <Col lg="9" className='p-0 ps-lg-5 text-start'>
                 
                    <Row className='mb-4'>
                        <Col md="4"><h3>Default: Shadow</h3>
                            <Card className='card-groove' variant="shadow">
                                <img src={cardinside} />
                            </Card>
                        </Col>
                        <Col md="4 mt-md-hd-3"><h3>Alternate: Outline </h3>
                            <Card className='card-groove' variant="outline"><img src={cardinside} /></Card>
                        </Col>
                        <Col md="4 mt-md-hd-3"><h3 className="text-nowrap"> Shadow with Outline </h3>
                            <Card className='card-groove' variant="shadow outline"><img src={cardinside} /></Card>
                        </Col>
                    </Row>
                    <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                        <pre  >
                            <code className="cmt">//In Main Component </code>
                            {codeItem.Cardbasic}
                        </pre>
                    </div>
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
                            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                                <pre  >
                                    {codeItem.ModalBasicCenter}
                                    {/* {codeModalbasic} */}
                                </pre>
                            </div>
                        </Col>

                    </Row>

                    <Row className='mb-4'>
                        <Col md="5">
                            <Card className='card-groove modalsample' variant="shadow">
                                <img src={replacefile} className="w-100" onClick={handleShow1} />
                            </Card>
                            <Modalbox show={modalshow1} onClose={handleClose1} />

                        </Col>
                        <Col md="5 mt-md-hd-3">
                            <Card className='card-groove modalsample' variant="shadow">
                                <img src={leavingwithout} className="w-100" />

                            </Card>
                        </Col>
                    </Row>
                    <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                        <pre>
                            {codeItem.ModalBasicDefault}

                        </pre>
                    </div>
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
                        <Col md="4 mt-md-hd-3">
                            <Card className='card-groove modalsample' variant="shadow">   <img src={enhancment} className="w-100" /></Card>
                        </Col>
                    </Row>
                    <h3 className='my-4'>Panels</h3>

                    <Row>
                        <Col md="6">
                            <Panel />
                        </Col>
                        <Col md="6 mt-md-hd-3"><PanelWithIcon />    </Col>
                    </Row>
<div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
<code className=' cmt'>//Panel component</code>
{codeItem.Panel}
</pre>
</div>
                </Col>
            </Row>
        </div></>
    );
}

export default CardTilesModals;