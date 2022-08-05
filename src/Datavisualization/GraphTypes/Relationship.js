import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph1 from "./images/relationship/graph1.png"
import graph2 from "./images/relationship/graph2.png"
 

function Relationship(props) {
    return (
        <div>
             <div class="bodyrhs-section-plain  pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p> Demonstrates how something does or does not affect another variable positively or negatively.</p>
                        <ul>
                            <li>Visualise relationships, differences, and correlations between two or more variables and their properties.</li>

                        </ul>
                        <div className='chartSet'>
                        <Row>
                            <Col>
                                <h3>Bubble Chart</h3>
                                <div className='card-graph'><img src={graph1} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Scatter Plot</h3>
                                <div className='card-graph'><img src={graph2} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                               
                            </Col>
                        </Row>
                         </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Relationship;