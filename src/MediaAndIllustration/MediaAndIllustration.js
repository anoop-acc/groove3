import React, { useState } from 'react';
import { Row, Col, Container, Card } from "react-bootstrap"

function MediaAndIllustration(props) {

    const [active, setActive] = useState("tab1")
    const isActive = (key) => (active === key ? 'active' : '');

    return (
        <Container   className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} fluid>
            <div className='sideNavMain'   >
                <div className='sideNav'>
                    <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>
                    <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} >Overview</a>
                    <a to="" className={`btn btn-link ${active === "tab2" ? "active" : ""}`} onClick={() => setActive("tab2")} >Chart Color Palettes</a>
                    <a to="" className={`btn btn-link ${active === "tab3" ? "active" : ""}`} onClick={() => setActive("tab3")} >Dashboard</a>


                </div>
            </div>
            <div className='bodyrhs'>
                {active === "tab1" && <div>
                <div class="bodyrhs-section-plain mb-0 pb-0  ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-lg-5 text-start '>
		  <h1 className='pagetitle'>Media & Illustration</h1>
		  </Col>
		  </Row>
</div>
                     </div>}
                {active === "tab2" && <div>&nbsp;</div>}
                {active === "tab3" && <div>&nbsp;</div>}


            </div>
        </Container>
    );
}

export default MediaAndIllustration;