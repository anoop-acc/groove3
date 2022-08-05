import React from 'react';
import { Row, Col, } from "react-bootstrap"

import tooltip1 from "./images/Tooltips/tooltip1.png"
import tooltip2 from "./images/Tooltips/tooltip2.png"
import tooltip3 from "./images/Tooltips/tooltip3.png"
import tooltip4 from "./images/Tooltips/tooltip4.png"
import tooltip5 from "./images/Tooltips/tooltip5.png"
import tooltipheader from "./images/Tooltips/headertooltip.png"
import bestpr1 from "./images/Tooltips/bestpr1.png"
import bestpr2 from "./images/Tooltips/bestpr2.png"
import bestpr3 from "./images/Tooltips/bestpr3.png"
import bestpr4 from "./images/Tooltips/bestpr4.png"
import bestpr5 from "./images/Tooltips/bestpr5.png"
import bestpr6 from "./images/Tooltips/bestpr6.png"

function Tooltips(props) {
    return (
        <>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                         <h1 className='pagetitle'>{props.title}</h1>
                        <p>Tooltips allow a user to see informative text when one can hover over or tap an element. In most cases, tooltips are under-utilized in the dashboard.</p>
                        <h2>1. Tooltip Approaches</h2>
                        <Row className='p-f-14'>
                            <Col>
                                <img className='img-tooltips' src={tooltip1} />
                                <p>Hover text to show the detailed information of the metric.</p>
                            </Col>
                            <Col>
                            <img className='img-tooltips'  src={tooltip2} />
                                <p>Tooltip on Abbreviation.</p>
                            </Col>
                            <Col>
                            <img className='img-tooltips'  src={tooltip3} />
                                <p>To display the information of the clicked elements.</p>
                            </Col>
                        </Row>
                        <Row className='p-f-14'>
                            <Col>
                            <img  className='img-tooltips'  src={tooltip4} />
                                <p>Hover text to show the detailed information of the metric.</p>
                            </Col>
                            <Col>
                            <img className='img-tooltips'  src={tooltip5} />
                                <p>Tooltip on Abbreviation.</p>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            
                            <img className='img-100'  src={tooltipheader} />
                                <p>Display the notification/alert message from the icons.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-gray   ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h2>2. Best Practices</h2>
                        <div className='d-flex'>
                            <div  ><img className='imgbestpractice'  src={bestpr1} /></div>
                            <div  ><img className='imgbestpractice'  src={bestpr2} /></div>
                        </div>
                        {/* <Row className='m-0'>
                            <Col> <img className='imgbestpractice'  src={bestpr1} /></Col>
                            <Col><img className='imgbestpractice'  src={bestpr2} /> </Col>
                        </Row> */}
                        <p>Be mindful of where you place your tooltips, covering up important parts of the page can feel more intruding than helpful.</p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                    <div className='d-flex'>
                            <div  ><img className='imgbestpractice'  src={bestpr3} /></div>
                            <div  ><img className='imgbestpractice'  src={bestpr4} /></div>
                        </div>
                        {/* <Row className='m-0'>
                            <Col> <img className='imgbestpractice'  src={bestpr3} /></Col>
                            <Col> <img className='imgbestpractice'  src={bestpr4} /></Col>
                        </Row> */}
                        <p>The text in the tooltip should be short and well-formatted. (limit to 20 chars per row)</p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-gray   ">
           
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                    <div className='d-flex'>
                            <div ><img className='imgbestpractice'  src={bestpr5} /></div>
                            <div ><img className='imgbestpractice'  src={bestpr6} /></div>
                        </div>
                        {/* <Row className='m-0'>
                            <Col> <img className='imgbestpractice'  src={bestpr5} /></Col>
                            <Col> <img className='imgbestpractice'  src={bestpr6} /></Col>
                        </Row> */}
                        <p>Watch out for redundancy. If a piece of information is already present in the section, a tooltip may be unnecessary and end up being frustrating.</p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Tooltips;