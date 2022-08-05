import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph11 from "./images/comparison/graph1.1.png"
import graph12 from "./images/comparison/graph1.2.png"
import graph13 from "./images/comparison/graph1.3.png"
import graph14 from "./images/comparison/graph1.4.png"
import graph15 from "./images/comparison/graph1.5.png"
import graph16 from "./images/comparison/graph1.6.png"
import graph17 from "./images/comparison/graph1.7.png"
import graph18 from "./images/comparison/graph1.8.png"
import graph19 from "./images/comparison/graph1.9.png"

function Comparison(props) {
    return (
        <div>
            <div class="bodyrhs-section-plain pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>Compare values between two or more data points, and easily find the lowest and highest values within the graph.</p>
                        <ul>
                            <li>Compare categories against similar measures.</li>
                            <li>Compare trends over time</li>
                        </ul>
                        <div className='chartSet'>
                        <Row>
                            <Col>
                                <h3>Bar Chart</h3>
                               <div className='card-graph'><img src={graph11} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Grouped Bar Chart</h3>
                                <div className='card-graph'><img src={graph12} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Line  Chart</h3>
                                <div className='card-graph'><img src={graph13} /></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Overlay Line Chart</h3>
                                <div className='card-graph'><img src={graph14} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Bar & Line Chart</h3>
                                <div className='card-graph'><img src={graph15} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Bullet Chart</h3>
                                <div className='card-graph'><img src={graph16} /></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Heat Map</h3>
                                <div className='card-graph'><img src={graph17} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Spider Chart</h3>
                                <div className='card-graph'><img src={graph18} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Lollipop Chart</h3>
                                <div className='card-graph'><img src={graph19} /></div>
                                <p>Dimension: 1<br />
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

export default Comparison;