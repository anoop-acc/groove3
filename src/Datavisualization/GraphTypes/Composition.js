import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph1 from "./images/composition/graph1.png"
import graph2 from "./images/composition/graph2.png"
import graph3 from "./images/composition/graph3.png"
import graph4 from "./images/composition/graph4.png"
import graph5 from "./images/composition/graph5.png"
import graph6 from "./images/composition/graph6.png"
import graph7 from "./images/composition/graph7.png"
import graph8 from "./images/composition/graph8.png"

function Composition(props) {
    return (
        <div>
            <div class="bodyrhs-section-plain  pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>Visualise how a part of data compares to the whole, and can show relative and absolute values.</p>
                        <ul>
                            <li>Take a total value and discover what component values make up that total.</li>

                        </ul>
                        <div className='chartSet'>
                        <Row>
                            <Col>
                                <h3>Pie Chart</h3>
                                <div className='card-graph'><img src={graph1}/></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Donnut Chart</h3>
                                <div className='card-graph'><img src={graph2}/></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Stacked Chart</h3>
                                <div className='card-graph'><img src={graph3}/></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Waterfall Chart</h3>
                                <div className='card-graph'><img src={graph4}/></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Tree Map</h3>
                                <div className='card-graph'><img src={graph5}/></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Miltiple Pie</h3>
                                <div className='card-graph'><img src={graph6}/></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Funnel</h3>
                                <div className='card-graph'><img src={graph7}/></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Stacked Chart</h3>
                                <div className='card-graph'><img src={graph8}/></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>

                            </Col>
                        </Row></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Composition;