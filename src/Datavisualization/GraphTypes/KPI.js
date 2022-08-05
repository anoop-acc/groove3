import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph1 from "./images/kpi/graph1.png"
import graph2 from "./images/kpi/graph2.png"
import graph3 from "./images/kpi/graph3.png"

function KPI(props) {
    return (
        <div>
             <div class="bodyrhs-section-plain  pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>Convey a single important message or data point that doesn't require much context to understand.</p>
                        <ul>
                            <li>KPI gives an immediate indication of a specific value.</li>
                            <li>Comparison of a single value against previous / benchmark values.</li>

                        </ul>
                        <div className='chartSet'>
                        <Row>
                            <Col>
                                <h3>Numeric Display</h3>
                                <div className='card-graph'><img src={graph1} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Progress Bar</h3>
                                <div className='card-graph'><img src={graph2} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Meter</h3>
                                <div className='card-graph'><img src={graph3} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            
                        </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default KPI;