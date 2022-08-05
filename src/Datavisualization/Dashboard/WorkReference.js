import React from 'react';
import {Row, Col,} from "react-bootstrap"
import designsample1 from "./images/designsample1.png"
import designsample2 from "./images/designsample2.png"
function WorkReference(props) {
    return (
        <div class="bodyrhs-section-plain mb-0 pb-0 pt-0 ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-lg-5 text-start '>
		  <img src={designsample1} className="w-100 mb-4"/>
		  <img src={designsample2} className="w-100"/>
		  </Col>
		  </Row>
</div>
    );
}

export default WorkReference;