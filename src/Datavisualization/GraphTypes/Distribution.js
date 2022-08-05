import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph1 from "./images/distribution/graph1.png"
import graph2 from "./images/distribution/graph2.png"
import graph3 from "./images/distribution/graph3.png"
import graph4 from "./images/distribution/graph4.png"
import graph5 from "./images/distribution/graph5.png"
import graph6 from "./images/distribution/graph6.png"
import graph7 from "./images/distribution/graph7.png"
import graph8 from "./images/distribution/graph8.png"

function Distribution(props) {
    return (
        <div>
          <div class="bodyrhs-section-plain  pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>View a collection of related or unrelated information in order to find out how it is spread or connected with the rest of the data.</p>
                        <ul>
                            <li>In addition to previous charts, distribution can be visualized to see if there are any connections, trends, patterns, shapes, clusters, averages, in the data.</li>

                        </ul>
                        <div className='chartSet'>
                        <Row>
                            <Col>
                                <h3>Map</h3>
                                <div className='card-graph'><img src={graph1} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Box Plot</h3>
                                <div className='card-graph'><img src={graph2} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Sankey Chart</h3>
                                <div className='card-graph'><img src={graph3} /></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Bubble Timeline</h3>
                                <div className='card-graph'><img src={graph4} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Violin Chart</h3>
                                <div className='card-graph'><img src={graph5} /></div>
                                <p>Dimensions: 3<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Word Cloud</h3>
                                <div className='card-graph'><img src={graph6} /></div>
                                <p>Dimension: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Gantt Chart</h3>
                                <div className='card-graph'><img src={graph7} /></div>
                                <p>Dimensions: 1<br />
                                    Measure: X, Y, Color.</p>
                            </Col>
                            <Col>
                                <h3>Pareto Chart</h3>
                                <div className='card-graph'><img src={graph8} /></div>
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

export default Distribution;