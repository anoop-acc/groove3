import React from 'react';
import {Row, Col,} from "react-bootstrap"
import dashboard1 from "./images/db1.png"
import dashboard2 from "./images/db2.png"
import dashboard3 from "./images/db3.png" 

function DataVisualizationApproach(props) {
    return (
        <div>
            <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'> </Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '><img  className='componentImg'  src={dashboard1}/></Col>
            </Row>
        </div>
        <div class="bodyrhs-section-plain">            
            <Row className="container-fluid  mx-auto p-0"> 
            <Col md="3" className=' p-0 lhs-emptyspace'></Col>
            <Col lg="9" className='p-0 ps-lg-5 text-start'>
             <h3 className='gbold'>1. Filter</h3>
         <p>
The left section of the layout is dedicated to placing all the Filters.</p>

<h3 className='gbold'>2. Top Ribbon</h3>
<p>A top ribbon is where you keep all of your KPI information in the entire asset. Depending on the client's requirement, the ribbon section may be kept static or dynamic. Try to limit the KPI to 5.</p>
<h3 className='gbold'>3. Section Hierarchy in the Layout</h3>
<p>
Organize the sections following the user scenario. Always try to keep the most important information on the top left of the layout and the least important on the bottom right.</p>
<div className='d-flex justify-content-between'><h2>Examples </h2>  <button className='btn btn-dark btn-eg'>Download</button></div>
<p><img className='componentImg' src={dashboard2}/></p>
<p><img  className='componentImg'  src={dashboard3}/></p>
            </Col>
            </Row>
        </div>
        </div>
    );
}

export default DataVisualizationApproach;