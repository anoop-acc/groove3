import React from 'react';
import { Row, Col } from "react-bootstrap"
import dsImg1 from "../../Foundations/Layout/images/StandardApproach1.png"
import dsImg2 from "./images/StandardApproach2.png"

function StandardApproach(props) {
    return (
        <div>
            <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <p><img src={dsImg1} className="w-100" style={{ maxWidth: "1000px" }} /></p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <h3>1. Tab Approach</h3>
                        <p>In this approach, one has the opportunity to show the primary navigation through tabs by placing some additional key data points inside the tab section which helps the user to drive the decision faster.</p>
                        <h3>2. Section Hierarchy in the Layout</h3>
                        <p>Organize the sections following the user scenario. Always try to keep the most important information on the top left of the layout and the least important on the bottom right.</p>
                   <h2>Template Examples from Abstract</h2>
                   <img src={dsImg2} className="w-100" style={{ maxWidth: "1000px" }} />
                   
                    </Col>
                </Row>
            </div>






        </div>
    );
}

export default StandardApproach;