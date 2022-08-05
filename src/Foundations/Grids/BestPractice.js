import React from 'react';
import flow8grid from "./images/flow8grid.png"
import flow8art from "./images/flow8art.png"
import {Row, Col} from "react-bootstrap"

function BestPractice(props) {
    return (
        <div>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0 list-page">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>Designing with the correct spacing is a real challenge, but maintaining the consistency of this spacing throughout the UI flow is even more challenging. The grid is the standard solution for this. The way it contains the elements will give a precise proportion, but we must remember that the layout can vary considerably, depending on the asset and how to display the information.
                        </p>
                        <h2>Follow 8 point grid structure</h2>
                        <img src={flow8grid} className="w-100" />
                        <p>Built for adaptability and responsiveness, Groove uses an 8pt grid system to consistently define object sizing, dimensions, padding, and margin of elements. Implementing the 8pt grid system is one of the more effective ways designers and developers can communicate sizing and spacing. In some cases, it is necessary to space objects with 2 or 4 points. (i.e. images and text blocks)</p>
                    </Col>
                </Row>
            </div>

            <div class="bodyrhs-section-gray mb-4 py-0 ">
               <Row className="  container-fluid"> 
               <Col md="3" className='p-0 lhs-emptyspace'></Col>
               <Col lg="9" className='p-0 ps-lg-5 text-start '>
               <img src={flow8art} className="w-100 shadow4 " />
            </Col>
               </Row>
            </div>

            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0 list-page">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                    <h2 className='mt-4'>Exceptions</h2>
              <h3 className='mt-4'> 1. Limit the sections </h3>
<p>Using more than 5 sections in the layout is not acceptable, but due to client requirement or merging two tabs for the storyline, we might end up using more than 5 sections in the layout and it hampers the performance of the asset so try 
to maintain consistent spacing between them.</p>

<h3 className='mt-4'>2. Evade Scroll in the Layouts.</h3>
<p>Using a Horizontal or Vertical scroll in the layout is not a best practice in the dashboard. To overcome this try to prioritize the section and group them into two different screens, but due to some exceptions, we might use this in some scenarios.</p>
              
                    </Col>
                    </Row>
            </div>

        </div>
    );
}

export default BestPractice;