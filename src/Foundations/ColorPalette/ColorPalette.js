import React from 'react';
import {Row, Col} from "react-bootstrap"

import clrRow1 from "./images/clrRow1.png"
import clrRow2 from "./images/clrRow2.png"
import clrRow3 from "./images/clrRow3.png"
import clrRow4 from "./images/clrRow4.png"
import clrRow5 from "./images/clrRow5.png"


function ColorPalette(props) {
    return (
        <>
         <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
  <h1 className='pagetitle'>{props.title}</h1>
 <p>The importance of the impact of colors cannot be underestimated. Colors influence the way people process information and the meaning of our visualization.</p>
 </Col>
 </Row>
 </div>
 <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <Row className=' color-info'>
                <Col md="6">
                    <h4 className='text-primary hd-bold'>Purple for impact and emphasis</h4>
                    <p>
Not to be over-used, Accenture purple should be
used for rare, attention-grabbing instances. Since
purple may not be compatible with most client
brand colors, it may be necessary to swap out
colors if designing a product for a client.</p>
                </Col>
                <Col md="6">
               <h4 className='text-blue hd-bold'>Blue for navigation elements</h4>
<p>For most buttons and links, Accenture blue should be used. In addition to following Accenture guidelines, blue is more compatible than purple when used in a client co-branded product.</p>
                </Col>
            </Row>
            <Row className='color-info '>
                <Col md="3">
                    <h2>Primary</h2>
                    <p>for impact and emphasis</p>
                    <div className='colorcircle bg-primary'></div>
                    <h5>Purple 500 - Base</h5>
                    <span className='colorvalue'>#A100FF </span>
                </Col>
                <Col md="3">
                    <h2>Secondary</h2>
                    <p>for navigation and accents</p>
                    <div className='colorcircle bg-blue'> </div>
                    <h5>Blue 500 - Base</h5>
                    <span className='colorvalue'>#0041F0</span>
                       
                      
                       
                </Col>
                <Col md="3">
                <h2>Black & White</h2>
                <div className='d-flex   justify-content-between'>
                    <span>
                    <p>&nbsp;</p>
                    <div className='colorcircle bg-black'></div>
                    <h5>Black</h5>
                    <span className='colorvalue'>#000000</span>
                    </span>
                
                    </div>
                </Col>
                <Col md="3">
                <h2>&nbsp;</h2>
                <span>
                    <p>&nbsp;</p>
                    <div className='colorcircle bg-white'></div>
                    <h5>White</h5>
                    <span className='colorvalue'>#FFFFFF</span>
                    </span>
                </Col>
            </Row>
        </Col>
 </Row>
 </div> 

 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
 <h2>Slate</h2>
 <img src={clrRow1} className="w-100" />
<h2>Purple</h2>
<img src={clrRow2} className="w-100" />
<h2>Blue</h2>
<img src={clrRow3} className="w-100" />
                  <h2>Semantic</h2>
<img src={clrRow4} className="w-100" style={{maxWidth:"810px"}}  />
                  <h2>Extended</h2>
                  <img src={clrRow5} className="w-100" style={{maxWidth:"810px"}} /> 
 </Col>
 </Row>
 </div>
        </>

 
    );
}

export default ColorPalette;