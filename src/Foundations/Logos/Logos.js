import React from 'react';
import { Row, Col } from "react-bootstrap"

import logoacclight from "./images/logo-acc-light.png"
import dimensional from "./images/dimensional.png"
import greterthanacc from "./images/greterthan-acc.png"
import greterthankeylinelight from "./images/greterthankeylinelight.png"
import keylinelight from "./images/keylinelight.png"
import logodarkacc from "./images/logo-dark-acc.png"
import logooidark from "./images/logooidark.png"
import logooilight2 from "./images/logooi-light2.png"
import logosolidlight2 from "./images/logosolidlight2.png"
import soliddarkmode from "./images/soliddarkmode.png"
import logodarkoi from "./images/logo-dark-oi.png"




function Logos(props) {
    return (


        <div class="bodyrhs-section-plain">
            <Row className="container-fluid  mx-auto p-0">
                <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                <Col lg="9" className='p-0 ps-lg-5 text-start'>
                    <h1 className='pagetitle'>{props.title}</h1>
                    <Row>
                        <Col md='6'><h2>Accenture logo</h2>
                            <h3 className='mt-3'>Light mode</h3>
                            <img src={logoacclight} />

                        </Col>
                        <Col md='6'>
                            <h2>Ops Interactive logo</h2>
                            <h3 className='mt-3'>Light mode</h3>
                            <img src={logooilight2} />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md='6'>
                            <h3 className='mt-3'>Dark mode</h3>
                            <img className='w-100' src={logodarkacc} style={{ maxWidth: "310px", height: "76px" }} />

                        </Col>
                        <Col md='6'>  <h3 className='mt-3' >Dark mode</h3>
                            <img className='w-100' style={{ maxWidth: "360px", height: "76px" }} src={logodarkoi} />
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col md='6'>
                            <h2 className='mt-3'>Greater than</h2>
                            <h3 className='mt-3'>Solid Light mode</h3>
                            <img src={greterthanacc} style={{ height: "61px" }} />



                        </Col>
                        <Col md='6'>   <h2 className='mt-3'>Avatar</h2>
                            <h3 className='mt-3'>Light mode</h3>
                            <img src={logosolidlight2} />


                        </Col>
                    </Row>

                    <Row>
                        <Col md="6">
                            <h3 className='mt-3'>Keyline Light mode</h3>
                            <img src={greterthankeylinelight} style={{ height: "61px" }} />
                        </Col>
                        <Col md="6">
                            <h3 className='mt-3'>Dark mode</h3>
                            <img src={logooidark} style={{ height: "132px" }} />

                        </Col>
                    </Row>


                    <Row className='mt-2'>
                        <Col md="6">
                            <div className='d-flex'>
                                <div className='flex-fill'>
                                    <h3 className='mt-3'>Solid Dark mode</h3>
                                    <img className='mt-3' src={soliddarkmode} />
                                </div>
                                <div className='flex-fill'>
                                    <h3 className='mt-3'>Keyline Dark mode</h3>
                                    <img className='mt-3' src={keylinelight} />
                                </div>

                            </div>
                        </Col>
                        <Col md="6">
                            <h3 className='mt-3'>Dimensional</h3>
                            <div className='d-flex'>
                                <div className='flex-fill'>
                                    <img src={dimensional} />


                                </div>
                                <div className='flex-fill'>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>






    );
}

export default Logos;