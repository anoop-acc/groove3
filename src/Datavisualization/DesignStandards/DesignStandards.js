import React from 'react';
import {Row, Col,} from "react-bootstrap"
import DesignStandardsTabs from "./DesignStandardsTabs"


 

function DesignStandards(props) {
    return (
        <div>
            <div class="bodyrhs-section-plain">            
            <Row className="container-fluid  mx-auto p-0"> 
            <Col md="3" className=' p-0 lhs-emptyspace'></Col>
            <Col lg="9" className='p-0 ps-lg-5 text-start'>
             <h1 className='pagetitle'>{props.title}</h1>
         <p>Design Standards are sets of recommendations on how to apply design principles to provide a positive user experience.</p>
        
            </Col>
            </Row>
        </div>
        <DesignStandardsTabs />
       
        </div>
    );
}

export default DesignStandards;