import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col, Tooltip, OverlayTrigger, Button  } from "react-bootstrap"

import tooltip1 from "./Images/Tooltips/tooltip1.png"
import tooltip2 from "./Images/Tooltips/tooltips2.png"


//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Tooltips(props) {




//Get Code Toggle
const [codedivActive, setActive] = useState("false");
const handleToggle = () => {
setActive(!codedivActive)
};

    const renderTooltipSingleline = props => (
        <Tooltip className='tooltip-groove' {...props}>Mark it as default view</Tooltip>
      );
    const renderTooltipMultiline = props => (
        <Tooltip className='tooltip-groove' {...props}>Sed aliquet, enim at vulputate porttitor
        <ul>
            <li>Aenean ultrices bibendum</li>
            <li>Aenean ultrices bibendum</li>
            <li>Aenean ultrices bibendum</li>
            <li>Aenean ultrices bibendum</li>
        </ul>
        </Tooltip>
      );

    return (
<>
<div class="bodyrhs-section-gray mb-0 pb-0  ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h1 className='mb-3 pagetitle' >{props.title}
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
         
            <p>A tooltip is a floating, non-actionable label used to explain a user interface element or feature. Tooltips temporarily display short, contextual text. They are typically activated when a user hovers over an icon or other trigger. </p> 
       <Row className='my-5'>
           <Col md="3"><h3>Simple</h3>
           <div className='tooltip-block-simple'></div>
           </Col>
           <Col md="3"><h3>Contextual</h3>
           <div className='tooltip-block-contextual'></div>
           </Col>
       </Row>
       <h3>Examples:</h3>
       <Row>
           <Col md="6"><div className='tooltipframe'><h4>Descriptive </h4>    
           <OverlayTrigger placement="bottom" overlay={renderTooltipMultiline }><span className='area1'>&nbsp;</span></OverlayTrigger >           
               <img src={tooltip1} style={{width:"100%", maxWidth:"455px"}}/>          
              
   </div></Col>
           <Col md="6"><div className='tooltipframe'><h4>Explanatory  </h4> 
           <OverlayTrigger placement="bottom" overlay={renderTooltipSingleline}><span className='area2'>&nbsp;</span></OverlayTrigger > 
           <img src={tooltip2} style={{width:"100%", maxWidth:"455px"}}/></div></Col>
      
       </Row>
       <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Tooltip}
</pre>
</div>
        </Col>
        </Row>
        </div>
        </>
    );
}

export default Tooltips;