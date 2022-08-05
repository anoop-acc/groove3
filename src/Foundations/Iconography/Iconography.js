import React from 'react';
import {Row, Col} from "react-bootstrap"

import iconsfoundation from "./images/icons-foundation.png"
import iconsfuntional from "./images/icons-funtional.png"
import iconsCrossoffering from "./images/icons-Cross-offering.png"
import iconsIndustry from "./images/icons-Industry.png"
import iconsSynOpsCore from "./images/icons-SynOpsCore.png"
import iconset from "./images/iconset.png"



function Iconography(props) {
    return (

        <>             
        <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
         <h1 className='pagetitle'>{props.title}</h1>
        <p>Icons are visual representations of commands, devices, directories, or common actions. Icons should be used in a purposeful manner to maximize comprehension and reduce cognitive load when you need to call attention to a particular action, command, or section. Use them infrequently – if you’re questioning an icon’s use, it probably doesn’t need to be used at all.</p>
      <h2>Brand category icons</h2>
         
        </Col>
        </Row>
        </div>
        
        <div class="bodyrhs-section-gray mb-4 ">
               <Row className="  container-fluid"> 
               <Col md="3" className='p-0 lhs-emptyspace'></Col>
               <Col lg="9" className='p-0 ps-lg-5 text-start '>
               <Row>
                 <Col md="4">
                   <h3>Foundation</h3>
                   <img src={iconsfoundation}  className="w-100" />
                   <h3 className='mt-3'>Functional</h3>
                   <img src={iconsfuntional}  className="w-100" />
                 </Col>
                 <Col md="4 px-4">
                   <h3 >Cross-offering</h3>
                   <img src={iconsCrossoffering}  className="w-100" />
                 </Col>
                 <Col md="4   ">
                   <h3>Industry</h3>
                   <img src={iconsIndustry}  className="w-100" />
                   <h3 className='mt-3'>SynOps Core</h3>
                   <img src={iconsSynOpsCore}  className="w-auto" />
                 </Col>
               </Row>
               </Col>
        </Row>
        </div>            
        <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
        <h2> Standard library icons</h2> 
        <div class="d-flex flex-wrap Standardlibraryicons mb-3">
          <img src={iconset} className="w-100" style={{maxWidth:"984px"}} />
          {/* <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>
          <span className='iconcard'>ico</span>           */}
        </div>
       
        </Col>
        </Row>
        </div>
        </>


       
    );
}

export default Iconography;