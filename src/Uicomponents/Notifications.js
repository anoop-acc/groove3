import React, { useState } from 'react';
import { Alert } from "react-bootstrap"
import Alerts from "./Alerts"
import { Row, Col, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Notifications(props) {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showD, setShowD] = useState(true);
  const [showE, setShowE] = useState(true);
  const [showF, setShowF] = useState(true);

 

const Comment =`import { Alert } from "react-bootstrap"`

  const [show, setShow] = useState(true);

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
                                    <NavLink className="transparent me-3  " to="/CoreuigrooveLanding/UiComponents"> <button className='btn-pagesub active' variant="outline-dark" size="sm">Overview</button></NavLink>
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
         
          <p>Use notifications to inform users of updates or changes to system status. Communicating with users and providing immediate feedback is important for building trust.</p>

          <div className='w-50'>      
            <Alert
              variant="blue"
              show={showA}
              dismissible
              onClose={() => setShowA(false)}
              className='groove-alert'
              iconname="fa-solid fa-circle-info"
            >
              <i className="fa-solid fa-circle-info"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>

            <Alert
              variant="primary"
              show={showB}
              dismissible
              onClose={() => setShowB(false)}
              className='groove-alert'
              iconname="fa-solid fa-circle-info"
            >
              <i className="fa-solid fa-circle-info"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>

            <Alert
              variant="success"
              show={showC}
              dismissible
              onClose={() => setShowC(false)}
              className='groove-alert'
              iconname="fa-solid fa-circle-check"
            >
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>
            <Alert
              variant="warning"
              show={showD}
              dismissible
              onClose={() => setShowD(false)}
              className='groove-alert'
              iconname="fa-solid fa-triangle-exclamation"
            >
              <i className="fa-solid fa-triangle-exclamation"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>
            <Alert
              variant="danger"
              show={showE}
              dismissible
              onClose={() => setShowE(false)}
              className='groove-alert'
              iconname="fa-solid fa-circle-xmark"
            >
              <i className="fa-solid fa-circle-xmark"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>
             
            <Alert
              variant="secondary"
              show={showF}
              dismissible
              onClose={() => setShowF(false)}
              className='groove-alert'
              iconname="fa-solid fa-circle-xmark"
            >
              <i className="fa-solid fa-circle-xmark"></i>
              <div>
                <Alert.Heading>Alert title goes here</Alert.Heading>
                <p>All the world’s indeed a stage and we are merely players.
                </p>
              </div>
            </Alert>

          </div>
          <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
          <pre>
            <code className='cmt '>{codeItem.codeComment}</code>           
            <code className='cmt '>{codeItem.Comment}</code>           
            <code>{codeItem.AlertCode}</code>
          </pre>
          <table className='codetable border mt-3'>
    <tr>
        <td className="p-2 border w-25">Variants</td>
        <td className="p-2 border ">
        primary, blue, success, warning, danger, secondary
        </td>
    </tr>
    <tr>
        <td className="p-2 border w-25">Custom Class</td>
        <td className="p-2 border ">
        groove-alert
        </td>
    </tr>
    </table>
          </div>
        </Col>
      </Row>
    </div>
    </>

  );
}

export default Notifications;