import React from 'react';
import {Row, Col} from "react-bootstrap"
import {NavLink} from "react-router-dom"


import StandardApproach1 from "./images/standard-layout1.png"
import StandardApproach2 from "./images/standard-layout2.png"
import StandardApproach3 from "./images/StandardApproach3.png"

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;


function StandardApproach(props) {
    const {codedivActive} = props;
    return (
        <>

<div class="bodyrhs-section-plain mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <p>There are different kinds of layouts that are used in the applications. Some of the most used ones are as described below:</p>
           <h2>Record Layouts</h2>
          <p> Record layouts consist of a page header, a sidebar and a content area. Based on the requirements, the content should be displayed in the respective areas.
          </p>
          <p>
The navigation header is fixed throughout the entire viewport. As the user scrolls, the header remains in the fixed position on top of the page.</p>
            <img src={StandardApproach1} className="w-100" />
            <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <NavLink className="demo" to="/Layouts/light" target={"_blank"} >Demo</NavLink>
<pre>
{codeItem.layout}
</pre>
</div>
        </Col>
 </Row>
 </div> 

 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
 <h2>Responsive Layouts</h2>
            <p>A responsive layout is fluid and can adapt to changing format sizes. This helps the application render across multiple devices.</p>
           
            <img src={StandardApproach2} className="w-100 mb-4" />
            
 </Col>
 </Row>
 </div>
  
        </>
    );
}

export default StandardApproach;