import React from 'react';
import {Row, Col} from "react-bootstrap"
function DesignStandards(props) {
    return (
         <>             
        <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
         <h1 className='pagetitle'>{props.title}</h1>
        <h1>Design Standards</h1>
            <p>The principle of design used to create structure, organization, and improve readability is the alignment.</p> 
        </Col>
        </Row>
        </div>
        
        <div class="bodyrhs-section-gray mb-4 ">
               <Row className="  container-fluid"> 
               <Col md="3" className='p-0 lhs-emptyspace'></Col>
               <Col lg="9" className='p-0 ps-lg-5 text-start '>
               <h3>1. Aspect Ratio</h3>
               <p>Place all the sections which occupy the artboard with minimal margin and follow the same aspect ratio for the rest of the screens. For more information please refer to Groove.</p>
             
               </Col>
        </Row>
        </div>        

         <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
        <h3>2. Section Alignment</h3>
                <p>
Try to maintain consistent spacing between the sections throughout the app maintain a consistent aspect ratio while placing the elements inside the section</p>
          xxxxxxxxx
          <p>Maintain a consistent aspect ratio while placing the elements inside the section.</p>
          <h3>3. Header Spacing</h3>
          <p>Consistent spacing creates a visual balance that makes the user interface easier to scan. Apply consistent spacing to improve the quality of the UI. All spacing for components and typography is done in increments of 4 pixels. This forms the basic unit of measurement for spacing.</p>
         <h2>Redlines examples</h2>
         <p>Use less space between small components, or components that share a close functional relationship.</p>
         
         </Col>
        </Row>
        </div>    
        </>


 
    );
}

export default DesignStandards;