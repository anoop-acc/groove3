import React from 'react';
import {Row, Col} from "react-bootstrap"

import interior1 from "./images/interior1.png"
import interior2 from "./images/interior2.png"
import interior3 from "./images/interior3.png"
import interior4 from "./images/interior4.png"
import wr1 from "./images/wr1.png"
import wr2 from "./images/wr2.png"
import landingpage1 from "./images/landingpage1.png"

function WorkReference(props) {
    return (
        <>

 
 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
 <h2>Landing Pages</h2>
 <Row>
     <Col md="5">
          <img src={landingpage1} className="w-100 mb-3" style={{maxWidth:"874px" , maxHeight:"1266px"}} />
     </Col>
     <Col md="7">
     <img src={wr1} className="w-100 mb-3"   style={{maxWidth:"526px"  }} />
     <img src={wr2} className="w-100" style={{maxWidth:"526px"  }}  />
     </Col>
 </Row>
 <h2 className='my-3'>Interior Pages</h2>
 <Row>
     <Col md="6"><img src={interior1} className="w-100" /></Col>
     <Col md="6"><img src={interior2} className="w-100" /></Col>
 </Row>
 <Row>
     <Col md="6"><img src={interior3} className="w-100" /></Col>
     <Col md="6"><img src={interior4} className="w-100" /></Col>
 </Row>
 </Col>
 </Row>
 </div>
 
    </>
    );
}

export default WorkReference;