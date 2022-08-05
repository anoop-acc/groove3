import React from 'react';
import {Row, Col} from "react-bootstrap"
import ExceptionsImg1 from "./images/ExceptionsImg1.png"
import ExceptionsImg2 from "./images/ExceptionsImg2.png"

function Exceptions(props) {
    return (
        <div>
             <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                    <h3>1. Limit the sections</h3>
<p>Using more than 5 sections on the layout is not acceptable, but due to client requirements or merging two tabs for the storyline, we might end up using more that 5 sections in the layout  and it hamper the performance of the asset so try to maintain consistent spacing between the elements.</p>
          <p><img src={ExceptionsImg1}  className="w-100" style={{maxWidth:"1000px"}} /></p>
         
                    </Col>
                </Row>
            </div>

            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                    

                        <h3>2. Evade Scroll in the Layouts </h3>
                        <p>Using horizontal or vertical scroll in the layout is not a best practice in the dashboard. To overcome this try to prioritize the section and group them into two different screens, but due to some exceptions, we might use this in some scenarios. </p>
                    <p><img src={ExceptionsImg2}  className="w-100" style={{maxWidth:"1000px"}} /></p>
                        </Col></Row></div>
            
        </div>
    );
}

export default Exceptions;