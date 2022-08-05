import React from 'react';
import {Row, Col,} from "react-bootstrap"
import ChartColorPalettesTabs from "./ChartColorPalettesTabs"

function Charts(props) {
    return (
         
         <div class="bodyrhs-section-plain">            
         <Row className="container-fluid  mx-auto p-0"> 
         <Col md="3" className=' p-0 lhs-emptyspace'></Col>
         <Col lg="9" className='p-0 ps-lg-5 text-start'>
         <h1 className='pagetitle'>{props.title}</h1>
         <p>Insert text here regarding why we are designing this color palette.</p>
        <ChartColorPalettesTabs />
         </Col>
         </Row>
         </div>
    );
}

export default Charts;