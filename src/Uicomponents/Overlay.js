import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import {  Row, Col, Button } from "react-bootstrap"

import modalbox1 from "./Images/Overlay/modalbox1.png"
import modalbox2 from "./Images/Overlay/modalbox2.png"
import Modalbox from "./Overlay/Modalbox.js"
import ModalboxPlain from "./Overlay/ModalboxPlain.js"



//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Overlay(props) {

//Get Code Toggle
const [codedivActive, setActive] = useState("false");
const handleToggle = () => {
setActive(!codedivActive)
};

    const [modalshow, setShow] = React.useState(false);    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [modalshow2, setShow2] = React.useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

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
        
            <p>Overlays are handy user interface (UI) components that can simulate interactivity within your design and encourage users to take important actions by adding a temporary transparent layer that covers page content, shifting focus to a new content element. </p>
     <div>
     <Modalbox show={modalshow} onClose={handleClose} />
       <img onClick={handleShow} src={modalbox1} style={{width:"100%", cursor:'pointer'}}/>
       </div>
       <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.OverlayModalA}
</pre>
</div>
       <h2 className=' my-4' >Work Reference Example</h2>
       <div>
       <img onClick={handleShow2} src={modalbox2} style={{width:"100%", cursor:'pointer'}}/>
        <ModalboxPlain show={modalshow2} onClose={handleClose2} />
       </div>
       <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.OverlayModalB}
</pre>
</div>
        </Col>
        </Row>
        </div>
           </>
    );
}

export default Overlay;