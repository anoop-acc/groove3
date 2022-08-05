import React from 'react';
import { Row, Col, } from "react-bootstrap"
import FiltersTabs from "./FiltersTabs"

function Filters(props) {
    return (
        <> <div class="bodyrhs-section-plain pb-0">
            <Row className="container-fluid  mx-auto p-0">
                <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                <Col lg="9" className='p-0 ps-lg-5 text-start'>
                     <h1 className='pagetitle'>{props.title}</h1>
                    <p className='pb-0'>Filters allow users to trim down visible items when working through large data sets. Filters can help a user find something they’re looking for, see available options within a certain set of criteria, and make a decision when faced with a large number of options.</p>
                </Col>
            </Row>
        </div>
            <FiltersTabs />
        </>
    );
}

export default Filters;