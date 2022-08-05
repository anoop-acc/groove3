import React from 'react';
import { Row, Col } from "react-bootstrap"
import grids from "./images/grids.png"
import GridTabs from "./GridTabs"

function Grids(props) {
    return (


        <>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <h1 className='pagetitle'>{props.title}</h1>
                        <p>A grid is a guide that helps to align screen elements based on sequenced columns and rows to arrange information and make consistent user experiences.</p>
                        <img src={grids} className="w-100" />
                    </Col>
                </Row>
            </div>

            <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h2>8 pt Grid System</h2>
                        <p>Groove uses an 8-point grid system for sizing, spacing, and laying out components relative to one another. This means that the width, offset, columns, gutter, height, and spacing always have a multiple of 8 pixels ensuring consistency across layouts.</p>
                        <Row>
                            <Col md="3">
                                <p className='m-0'><b>Total Width:</b> 1360 px<br />
                                    <b>Offset:</b> 40 px<br />
                                    <b>Column Width:</b> 200 px<br />
                                    <b>Gutter Width:</b> 16 px<br /></p>
                            </Col>
                            <Col md="9">
                                <p className='m-0'>
                                    <b> Static Height: </b> Minimum: 760 px — Medium: 940 px — Large: 1080 px.<br />
                                    <b>Spacing:</b> multiples of 8<br />
                                    <b>Recommendation:</b> We recommend avoiding the vertical scroll to have a better experience visualizing the data on the page.<br />
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <GridTabs />

        </>


    );
}

export default Grids;


