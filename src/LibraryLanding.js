import React, { useState } from 'react';
import { Row, Col, Container, Card, Button } from "react-bootstrap"

import { NavLink } from 'react-router-dom'

import Header from "./Header"
import Footer from "./Footer"

import compassdrafting from "./groovelibrary/FontAwesomeIconLibrary/duotone/compass-drafting.svg"
import listcheck from "./groovelibrary/FontAwesomeIconLibrary/duotone/list-check.svg"
import chartmixed from "./groovelibrary/FontAwesomeIconLibrary/duotone/chart-mixed.svg"
import presentationscreen from "./groovelibrary/FontAwesomeIconLibrary/duotone/presentation-screen.svg"
import mobilebutton from "./groovelibrary/FontAwesomeIconLibrary/duotone/mobile-button.svg"
import diagramproject from "./groovelibrary/FontAwesomeIconLibrary/duotone/diagram-project.svg"

import { ReactComponent as Download } from "./groovelibrary/FontAwesomeIconLibrary/duotone/download.svg"
import { ReactComponent as Angleright } from "./groovelibrary/FontAwesomeIconLibrary/regular/angle-right.svg"

import banner from "./Assets/images/banner.png"
import Resources1 from "./Assets/images/resources-img1.png"
import Resources2 from "./Assets/images/Resources-img2.png"


function LibraryLanding(props) {

    const [active, setActive] = useState("tab1");
    const isActive = (key) => (active === key ? 'active' : '');




    return (
        <>
            <header className='innerpageHeader'>
                <Header />
            </header>
            <div className='p-0 pb-3 containerMain landing container-fluid'>
                <div class="bodyrhs-section-plain overview librarylading">

                    <Row className="container-fluid  mx-auto p-0">
                        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                        <Col md="9" className='p-0  px-5 text-start rs'>

                            <Row className=' '>
                                <Col xl="6">
                                    <h1 className='landingTitle'>Design, develop, deliver</h1>
                                    <h4>Use Groove's end-to-end design language to create simple, intuitive and beautiful experiences.</h4>
                                    <p className='mt-40 bannertxt'>This Experience Library is for anyone working on Accenture products that speak for themselves — they’re self-explanatory and intuitive to the users.</p>
                                </Col>

                                <Col xl="6" className='bannerblock'>
                                    <img src={banner} className=" ddd-banner"></img>

                                </Col>


                            </Row>
                            <div className="cardSet">
                                <h2 className="pt-5 pb-4">Resources</h2>
                                <Row>
                                    <Col xl="6" lg="12" className="mb-md-3"><Card  >
                                        <Row>
                                            <Col sm="4" className="lhs pe-0"><img className='w-100' src={Resources1} style={{ maxWidth: "200px" }}></img></Col>
                                            <Col sm="8" className="rhs ps-4"><section>
                                                <h3>View Sketch Inspect - For Developers</h3>
                                                <p>View sketch inspect will take you to our sketch document allowing developers to inspect the design and export assets for development. </p>
                                            </section>
                                            </Col>

                                        </Row>
                                    </Card></Col>
                                    <Col xl="6" lg="12" className="ps-4"><Card  >
                                        <Row>
                                            <Col sm="4" className="lhs pe-0"><img className='w-100' src={Resources2} style={{ maxWidth: "200px" }}></img></Col>
                                            <Col sm="8 " className="rhs ps-4"><section>
                                                <h3>View Design Checklist- For Designers</h3>
                                                <p>View the checklist made for designers to improve the quality process of your design deliverables.</p>
                                            </section>
                                            </Col>
                                        </Row>
                                    </Card></Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>


                </div>
            </div>
            <Footer />
        </>
    );
}

export default LibraryLanding;