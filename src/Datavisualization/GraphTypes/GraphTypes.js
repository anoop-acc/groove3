import React from 'react';
import {Row, Col,} from "react-bootstrap"
import GraphTabs from "./GraphTabs"

function GraphTypes(props) {
    return (
        <>
        <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
         <h1 className='pagetitle'>{props.title}</h1>
        <p>This section is a visual vocabulary guide to show you how to choose your charts wisely.</p>
        <p>There are many ways to visualize data - how do we know which one to pick? The goal of this section is to help you decide which data relationship is most important in your story, by showing you the different types of charts that follow a use case.</p>
        <p>In this section, we want to show you some initial ideas of what might work best. This list is not meant to be exhaustive, nor a wizard, but is a useful starting point for making informative and meaningful data visualizations.</p>
        </Col>
        </Row>
        </div>
        <GraphTabs />
        </>
    );
}

export default GraphTypes;