import React from 'react';
import {Row, Col} from "react-bootstrap"


import charts from "./images/ds-nomenclature/charts.png"
 
import align3 from "./images/ds-nomenclature/align3.png"
import consist1 from "./images/ds-nomenclature/consist1.png"
import consist2 from "./images/ds-nomenclature/consist2.png"
import consist3 from "./images/ds-nomenclature/consist3.png"
import cosisttypo1 from "./images/ds-nomenclature/cosisttypo1.png"
import cosisttypo2 from "./images/ds-nomenclature/cosisttypo2.png"
import consisttypog from "./images/ds-nomenclature/consisttypog.png"
import metric from "./images/ds-nomenclature/metric.png"
import tablealignment from "./images/ds-nomenclature/tablealignment.png"
import topribbonalignments from "./images/ds-nomenclature/topribbonalignments.png"

function Nomenclature(props) {
    return (
        <div>
         
 <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2> Be meaningful:</h2>
            <p>Use business language rather than technical terms so that one can glance at what a report is showing, what a metric does, and so on.</p>
        <img src={charts}  className="w-100" style={{maxWidth:"892px"}}  />
        </Col>
 </Row>
 </div> 

 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>Be Consistent with Capitalization:</h2>
     <p>The first letter should be in uppercase and the rest of the characters should be in lowercase, follow this format throughout the app.</p>
     <img src={consist1}  className="w-100" style={{maxWidth:"892px"}} />
 </Col>
 </Row>
 </div>

 <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2>Avoid Abbreviations:</h2>
            <p>Avoid abbreviations in the Nomenclatures, this will confuse the user who is using it the first time.</p>
            <img src={consist2}  className="w-100" style={{maxWidth:"892px"}} />
        </Col>
 </Row>
 </div> 

 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>Avoid Measures: </h2>
     <p>In the title, do not include units or amounts, as those are handled on the chart axis labels.</p>
     <img src={consist3}  className="w-100"  style={{maxWidth:"892px"}} />
 </Col>
 </Row>
 </div>

 <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2>Should be Consistent Typography:</h2>
            <p>Maintain consistent Font size, color, and placement throughout the app.</p>
              <img src={consisttypog}  className="w-100"  style={{maxWidth:"888px"}} />
        </Col>
 </Row>
 </div>
 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>Spelling and Grammar:</h2> 
     <p>Make sure to double-check your spelling and grammar while creating the nomenclatures in the app.</p>
     <h2>Metric Alignment Inside the Tabular</h2>
     <ol>
  <li>All text left aligned</li>
  <li>If numbers are summed up or added or are currency or quantity, right align</li>
  <li>Numbers that don’t value, like product codes, for example, are treated as text and left-aligned</li>
  <li>If it’s a date and they're uniform (ie: 2020/01/02) then center align so the eye can scan easily, but if the dates are  
       irregular (ie: 2020/1/2 or Jan 2, 2020) then left align</li>
</ol>
<img src={metric}  className="w-100" style={{maxWidth:"732px"}}  />
 	
 </Col>
 </Row>
 </div> 

 <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid"> 
        <Col md="3" className='p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start '>
            <h2>Top Ribbon Alignment</h2>
            <p>Inside the top ribbon, the main value and Associated values should be left-aligned to their corresponding metric label.</p>
            <img src={topribbonalignments}  className="w-100" style={{maxWidth:"664px"}} />
        </Col>
 </Row>
 </div> 
 <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
     <h2>Table Alignment</h2> 
     <p>A. Values inside the tabular should maintain consistent alignment to its corresponding column header</p>
     <p> <img src={tablealignment}  className="w-100"  style={{maxWidth:"1019px"}}  /></p> 
     <p>B. Maintain consistent alignment between the header and the section.</p>
     <p> <img src={align3}  className="w-100"  style={{maxWidth:"896px"}} /></p> 
 </Col>
 </Row>
 </div>
</div>
    );
}

export default Nomenclature;