import React, { useState } from "react";
import {Row, Col,} from "react-bootstrap"

import { Link } from "react-router-dom";

import DataVisualizationApproach from "./DataVisualizationApproach"
import WorkReference from "./WorkReference"

function Dashboard(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");


    return (
        <div>
             
            <div class="bodyrhs-section-plain">            
            <Row className="container-fluid  mx-auto p-0"> 
            <Col md="3" className=' p-0 lhs-emptyspace'></Col>
            <Col lg="9" className='p-0 ps-lg-5 text-start'>
             <h1 className='pagetitle'>{props.title}</h1>
         <p>The layout is the structure that supports the visual components of an interface. It works by opening the paths where the sight can shift to group, rank, and make sense of the information. </p><p>It also helps the content to highlight what is the most important data on the side.</p>

         <div className="mb-0 customTabset"> 
<Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Data Visualization Approach</Link>
<Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Work Reference</Link>
</div></Col>
</Row>
</div>

{active === "tabA" && <div className=""><DataVisualizationApproach/> </div>}
{active === "tabB" && <div className=""><WorkReference/></div>}


        {/* <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'> </Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '><img  className='componentImg'  src={dashboard1}/></Col>
            </Row>
        </div> */}
        {/* <div class="bodyrhs-section-plain">            
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
        </div> */}
            
        </div>
    );
}

export default Dashboard;