import React from 'react';

import {Row, Col} from "react-bootstrap"
import allignments1   from "./images/allignments1.png"
import allignments2   from "./images/allignments2.png"
import sectionalignment   from "./images/sectionalignment.png"
import sectionalignment2   from "./images/sectionalignment2.png"
import headerspacing   from "./images/headerspacing.png"
import redlines   from "./images/redlines.png"

function Alignments(props) {
    return (
        <div>
             <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0 list-page">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                    <p>Place all the sections which occupy the artboard with minimal margin and follow the same aspect ratio for the rest of the screens. For more information please refer to Groove.</p>
            <Row>
                <Col md="6"><img src={allignments1} className='w-100' /> </Col>
                <Col md="6"><img src={allignments2} className='w-100' /> </Col>
            </Row>
            <h2 className='mt-4'>Section Alignment</h2>
            <p>Try to maintain consistent spacing between the sections throughout the app maintain a consistent aspect ratio while placing the elements inside the section</p>
            <img src={sectionalignment} className='w-100' />
            <p>Maintain a consistent aspect ratio while placing the elements inside the section.</p>
            <div className='text-center'><img src={sectionalignment2} className='w-auto mx-auto' /></div>
            <h2 className='mt-4'>Header Spacing</h2>
            <p>Consistent spacing creates a visual balance that makes the user interface easier to scan. Apply consistent spacing to improve the quality of the UI. All spacing for components and typography is done in increments of 4 pixels. This forms the basic unit of measurement for spacing.</p>
            <img src={headerspacing} className='w-100'  style={{maxWidth:"700px"}}/>
            <h2 className='mt-4'>Redlines examples</h2>
            <p>Use less space between small components, or components that share a close functional relationship.</p>
            <img src={redlines} className='w-100' style={{maxWidth:"700px"}} />
                    </Col>
                    </Row>
                    </div>
            




           
        </div>
    );
}

export default Alignments;