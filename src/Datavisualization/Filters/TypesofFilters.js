import React from 'react';
import {Row, Col} from "react-bootstrap"
import checkboxs from "./images/filters/checkboxs.png"  
import datepicker from "./images/filters/datepicker.png"  
import dropdown from "./images/filters/dropdown.png"  
import options from "./images/filters/options.png"  
import slider from "./images/filters/slider.png"  
import toggle from "./images/filters/toggle.png"  


function TypesofFilters(props) {
    return (
        <div>
                  <div class="bodyrhs-section-plain pt-0">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col md="9" className='p-0 ps-5 text-start cardSetFilters'>
     <Row className='p-f-14 mb-3'>
         <Col>
         <h3>1. Drop-down</h3>
         <p>
             <div className='card-filteritem'><img src={dropdown} /></div>
         </p>
         <p>There are standardized options. Be cautious when presenting more than 15 options as this can become frustrating for the user.</p>
         </Col>
         <Col>
         <h3>2. Checkboxes</h3>
         <p><div className='card-filteritem'> <img src={checkboxs} /></div></p>
         <p>This option allows users to select one or more items from a set. These are used where precise selection and filtering data are required.</p>
         </Col>
         <Col><h3>3. Radio Buttons</h3>
         <p><div className='card-filteritem'> <img src={options} /></div></p>
         <p>Radio buttons are used when there are two or more options that are mutually exclusive and the user must select just one choice.</p>
         </Col>
     </Row>
     <Row className='p-f-14'>
         <Col>
         <h3>4. Toggle</h3>
         <p><div className='card-filteritem'> <img src={toggle} /></div></p>
         <p> Toggle switches are used when there are two mutually exclusive options and one option should always be enabled by default.</p>
         </Col>
         <Col>
         <h3>5. Slider</h3>
         <p><div className='card-filteritem'><img src={slider} /></div></p>
         <p>A slider is a control element that uses a knob or lever moved horizontally to control a variable, to select a range from a fixed set of options.</p>
         </Col>
         <Col><h3>6. Date</h3>
         <p><div className='card-filteritem'> <img src={datepicker} /></div></p>
         <p>Date fields are used to filter according to the possible dates needed to check.</p>
         </Col>
     </Row>
 </Col>
 </Row>
 </div>
        </div>
    );
}

export default TypesofFilters;