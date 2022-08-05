import React from 'react';
import { Row, Col, } from "react-bootstrap"

import avoidscroll from "./images/avoidscroll.png"
import card2 from "./images/card2.png"
import filter1 from "./images/filter1.png"
import legend from "./images/legend.png"
import titleincreasestate from "./images/titleincreasestate.png"
import revanue from "./images/revanue.png"
import purchaseorders from "./images/purchaseorders.png"
import standardapproch from "./images/standardapproch.png"

function Sections(props) {
    return (
        <>
        <div class="bodyrhs-section-plain">
            <Row className="container-fluid  mx-auto p-0">
                <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                <Col lg="9" className='p-0 ps-lg-5 text-start'>
                     <h1 className='pagetitle'>{props.title}</h1>
                    <p>A section divides content into meaningful sections.</p>
                    <Row>
                        <Col>
                            <h2>1. Standard Approach</h2>
                            <img src={standardapproch} className="w-100"   style={{     maxWidth: "340px"}}/>
                            <ol className='olNumbers'>
                                <li> Section: This area can hold any kind of content.</li>

                                <li> Label: Title of the section.</li>

                                <li> Separator: Used to differentiate the label and
                                    content.</li>

                                <li> Legends: Legends of the chart.</li>

                                <li> Content: Used to display data visualization.</li>
                            </ol>
                        </Col>
                        <Col>
                            <h2>2. Section Style</h2>
                            <img src={card2} className="w-100"  style={{    maxWidth: "340px"}}/>
                            <ol className='olNumbers'>
                                <li>Section fill color: <b>#FFFFFF</b></li>
                                <li>No border: </li>
                                <li>Radius: <b>8px</b> </li>
                                <li>Section shadows: <b>Color: #000000, Alpha: 10<br/>
X:0, Y:2<br/>
Blur: 16, Spread: 0</b></li>
                                
   
                            </ol>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <div class="bodyrhs-section-gray   p-f-14">
        <Row className="  container-fluid mx-auto"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2>3. Avoid Scrolls in the Sections</h2>
            <Row>
                <Col>
                <img src={avoidscroll} className="w-100"/>
                </Col>
                <Col><p>Ideally, horizontal/vertical scroll bars are not used, but if it cannot be avoided the first try should be to expand the width/height of the section. If that doesn’t work, then validate that the number of values you are showing in an axis is too many and if it’s absolutely necessary to see all of them at once that’s the only condition you can use scroll bars.</p></Col>
            </Row>
        </Col>
 </Row>
 </div>  

 <div class="bodyrhs-section-plain p-f-14">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>4.  Placing filters in the section</h2>
     <Row>
                <Col> <img src={filter1} className="w-100"/></Col>
                <Col><p>The placement of filters inside the section is not acceptable, but due to some circumstances, we might end up having a dedicated filter to analyze the information for that section.</p></Col>
            </Row>
 </Col>
 </Row>
 </div>
 <div class="bodyrhs-section-gray   p-f-14">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2>5. Placement of color legends</h2>
           <Row>
               <Col><img src={legend} className="w-100"/></Col>
               
               <Col><p>The color legends are positioned at the top of a chart by default. Depending on the page’s layout and context, you may choose to position the legends at the bottom, left, or right of a chart.</p></Col>
           </Row>
        </Col>
 </Row>
 </div> 
 <div class="bodyrhs-section-plain p-f-14">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>6. Other Types of Sections</h2>
     <Row>
         <Col md="4">
         <img src={titleincreasestate} className="w-100"/>
            
             <p>Sections representing the information and metrics of a specific project.</p>
         </Col>
         <Col md="4">
          <img src={revanue} className="w-100"/>            
             <p>Sections representing a goal or target and the status of the project.</p>
             </Col>
     </Row>
     <Row>
         <Col>
         <img src={purchaseorders} className="w-100"/>  
         <p>Timeline section to represent the steps within a process.</p>
         </Col>
     </Row>
 </Col>
 </Row>
 </div>
        </>
    );
}

export default Sections;