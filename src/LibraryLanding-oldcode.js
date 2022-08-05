import React, { useState } from 'react';
import { Row, Col, Container, Card, Button  } from "react-bootstrap"

import { NavLink } from 'react-router-dom'
 
import Header from "./Header"
import Footer from "./Footer"

import compassdrafting from "./groovelibrary/FontAwesomeIconLibrary/duotone/compass-drafting.svg"
import listcheck from "./groovelibrary/FontAwesomeIconLibrary/duotone/list-check.svg"
import chartmixed from "./groovelibrary/FontAwesomeIconLibrary/duotone/chart-mixed.svg"
import presentationscreen from "./groovelibrary/FontAwesomeIconLibrary/duotone/presentation-screen.svg"
import mobilebutton from "./groovelibrary/FontAwesomeIconLibrary/duotone/mobile-button.svg"
import diagramproject from "./groovelibrary/FontAwesomeIconLibrary/duotone/diagram-project.svg"
 

import {ReactComponent as Download} from "./groovelibrary/FontAwesomeIconLibrary/duotone/download.svg"
import {ReactComponent as Angleright} from "./groovelibrary/FontAwesomeIconLibrary/regular/angle-right.svg"


function LibraryLanding(props) {

    const [active, setActive] = useState("tab1");
    const isActive = (key) => (active === key ? 'active' : '');

    const Tabs = [
        {
            tabname: "tab2",
            tabtitle: "Fountation",
            icon: compassdrafting,
            pagelink: "/CoreuigrooveLanding/Overview"


        },
        {
            tabname: "tab3",
            tabtitle: "Navigation",
            icon: listcheck,
            pagelink: "/CoreuigrooveLanding/Navigations"



        }
        ,
        {
            tabname: "tab4",
            tabtitle: "Components",
            icon: diagramproject,
            pagelink: "/CoreuigrooveLanding/UiComponents"


        }
        ,
        {
            tabname: "tab5",
            tabtitle: "Data Visualization",
            icon: chartmixed,
            pagelink: "/CoreuigrooveLanding/Datavisualization"

        }
        ,
        {
            tabname: "tab5",
            tabtitle: "Media & Illustration",
            icon: presentationscreen,
            pagelink: "/CoreuigrooveLanding/MediaAndIllustration"

        }
        ,
        {
            tabname: "tab5",
            tabtitle: "Mobile",
            icon: mobilebutton,
            pagelink: "/CoreuigrooveLanding/MediaAndIllustration"

        }

    ];


    return (
        <>
            <header className='innerpageHeader'>
                <Header />
            </header>
            <div className='p-0 pb-3 containerMain landing container-fluid'>
                <div class="bodyrhs-section-plain overview librarylading">
                   
                    <Row className="container-fluid  mx-auto p-0">
                        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                        <Col md="9" className='p-0 ps-5 text-start rs'>

                        <Row>
                        <Col md="6">
                            <h1 className='landingTitle'>Design, develop, deliver</h1>
                            <h4>Use Groove's end-to-end design language to create simple, intuitive and beautiful experiences.</h4>
                       <p>This Experience Library is for anyone working on Accenture products that speak for themselves — they’re self-explanatory and intuitive to the users.</p>
                        </Col>
                        <Col md="6">x</Col>
                    </Row>

                            <h1>Get to know about... </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p>Foundations are the visual elements needed to create engaging end-to-end user experiences.
                                This includes guidance on iconography, typography, layout, and structure.</p>
                            <div className='pt-3 card-set '>
                                {Tabs.map((obj, i) => (
                                    <Card className=''>
                                        <Card.Body>
                                            {/* <i className={obj.icon}></i>   */}
                                            <img className='ovrwCardIcon' src={obj.icon} />
                                            <Card.Title>{obj.tabtitle}</Card.Title>
                                            {/* <Card.Link key={i} onClick={() => setActive(obj.tabname)} className="tab"> */}
                                            <NavLink className="card-link tab" to={obj.pagelink}  >
                                            Click to see more <Angleright style={{width:"10px", fill:"#018EFF"}}  />
                                             {/* <img src={linkarrow}/>            */}
                                                </NavLink>                                              
                                        </Card.Body>
                                    </Card>
                                ))}


                            </div>
                            <p>Please refer to the following available files to download:</p>
                            <div className='d-flex'>
                            <Button className='btn-groove me-4' variant="outline-blue"><span className='ico-ls'><Download  /></span>Download Sketch</Button>
                            <Button className='btn-groove' variant="outline-primary"><span className='ico-ls'><Download  /></span>Download Check-List</Button>
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