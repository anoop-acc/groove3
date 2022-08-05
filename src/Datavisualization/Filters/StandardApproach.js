import React from 'react';
import {Row, Col} from "react-bootstrap"
import sa from "./images/approach/sa.png"  

function StandardApproach(props) {
    return (
        <div>
             <div class="bodyrhs-section-plain pt-0">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'><img  className='componentImgAuto'  src={sa}/>
 </Col>
 </Row>
 </div>
        </div>
    );
}

export default StandardApproach;