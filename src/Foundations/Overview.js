import React, { useState } from 'react';

import { Row, Col, Container, Card } from "react-bootstrap"

//  import AlignandRatio from "./AlignandRatio"
import Avatar from "./Avatar/Avatar"
import Breakpoints from "./Breakpoints/Breakpoints"
import ColorPalette from "./ColorPalette/ColorPalette"
import Grids from "./Grids/Grids"
import Iconography from "./Iconography/Iconography"
import Layout from "./Layout/Layout"
import Logos from "./Logos/Logos"
//  import SpacingandPadding from "./SpacingandPadding"
import Typography from "./Typography/Typography"
import DesignStandards from "./DesignStandards/DesignStandards"
import linkarrow from "../images/angle-right-solid.svg"

import avatar from "./images/overview/avatar.png"
import breakpoints from "./images/overview/breakpoints.png"
import colors from "./images/overview/colors.png"
import grid from "./images/overview/grid.png"
import iconography from "./images/overview/iconography.png"
import logos from "./images/overview/logos.png"
import typography from "./images/overview/typography.png"
import layout from "./images/overview/layout.png"
 
//sidemenu icons
import {ReactComponent as Eye } from "../groovelibrary/FontAwesomeIconLibrary/regular/eye.svg"
import {ReactComponent as Circleuser } from "../groovelibrary/FontAwesomeIconLibrary/regular/circle-user.svg"
import {ReactComponent as Rulercombined } from "../groovelibrary/FontAwesomeIconLibrary/regular/ruler-combined.svg"
import {ReactComponent as Palette } from "../groovelibrary/FontAwesomeIconLibrary/regular/palette.svg"
import {ReactComponent as Tablecellslarge } from "../groovelibrary/FontAwesomeIconLibrary/regular/table-cells-large.svg"
import {ReactComponent as Circleinfo } from "../groovelibrary/FontAwesomeIconLibrary/regular/circle-info.svg"
import {ReactComponent as Paintbrush } from "../groovelibrary/FontAwesomeIconLibrary/regular/paint-brush.svg"
import {ReactComponent as Filepowerpoint } from "../groovelibrary/FontAwesomeIconLibrary/regular/file-powerpoint.svg"



function Overview(props) {

    const [active, setActive] = useState("tab1")
    const isActive = (key) => (active === key ? 'active' : '');


    // Component Overview
    function OverviewMain(props) {


        const Tabs = [
            // {
            //   tabname: "tab2",
            //   tabtitle:"Align & Ratio",
            //   icon:"far fa-file-powerpoint"
            // },
            {
                tabname: "tab3",
                tabtitle: "Avatar",
                icon: avatar
            }
            ,
            {
                tabname: "tab4",
                tabtitle: "Breakpoints",
                icon: breakpoints
            }
            ,
            {
                tabname: "tab5",
                tabtitle: "Color Palette",
                icon: colors
            },
            // {
            //     tabname: "tab12",
            //     tabtitle: "Design Standards",
            //     icon: "far fa-file-powerpoint"
            // }
            // ,
            {
                tabname: "tab6",
                tabtitle: "Grids",
                icon: grid
            }
            ,
            {
                tabname: "tab7",
                tabtitle: "Iconography",
                icon: iconography
            }
            ,
            {
                tabname: "tab8",
                tabtitle: "Layout",
                icon: layout
            }
            ,
            {
                tabname: "tab9",
                tabtitle: "Logos",
                icon: logos
            }
            // ,
            // {
            //     tabname: "tab10",
            //     tabtitle:"Spacing & Padding",
            //     icon:"far fa-file-powerpoint"
            // }
            ,
            {
                tabname: "tab11",
                tabtitle: "Typography",
                icon: typography
            }
        ];

        return (
            <>
                <div class="bodyrhs-section-plain overview ">               
                    <Row className="container-fluid  mx-auto p-0" >                      
                        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                        <Col md="9" className='p-0 ps-5 text-start bodyRs'>
                            <h1>Overview </h1>
                            <p>Foundations are the visual elements needed to create engaging end-to-end user experiences.
                                This includes guidance on iconography, typography, layout, and structure.</p>
                            <div className='pt-3 card-set '>
                                {Tabs.map((obj, i) => (
                                    <Card className=''>
                                        <Card.Body>
                                            {/* <i className={obj.icon}></i> */}
                                            <img className='ovrwCardIcon' src={obj.icon} />
                                            <Card.Title>{obj.tabtitle}</Card.Title>
                                            <Card.Link key={i} onClick={() => setActive(obj.tabname)} className="tab">
                                                Click to see more <img src={linkarrow} />
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>
                                ))}

                     
                            </div>
                            
                        </Col>
                    </Row>
                     
                </div>


            </>
        );
    }

    // Component Overview ends 


    return (
<>
  <Container fluid className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} > 
            <div className='sideNavMain  '   >
                <div className='sideNav'>
                    <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>

                    {/* <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} ><Eye className='icon-sidemenu' />Overview</a> */}
                    {/* <a to="" className={`btn btn-link ${active === "tab2"? "active":""}`}    onClick={() => setActive("tab2")} > Align & Ratio</a>  */}
                    <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} > <Circleuser  className='icon-sidemenu' />Avatar       </a>
                    <a to="" className={`btn btn-link ${active === "tab4" ? "active" : ""}`} onClick={() => setActive("tab4")}>   <Rulercombined  className='icon-sidemenu' /> Breakpoints</a>
                    <a to="" className={`btn btn-link ${active === "tab5" ? "active" : ""}`} onClick={() => setActive("tab5")}>   <Palette  className='icon-sidemenu' /> Color Palette</a>
                    {/* <a to="" className={`btn btn-link ${active === "tab12" ? "active" : ""}`} onClick={() => setActive("tab12")}>Design Standards</a> */}
                    <a to="" className={`btn btn-link ${active === "tab6" ? "active" : ""}`} onClick={() => setActive("tab6")}><Tablecellslarge  className='icon-sidemenu' />   Grids</a>
                    <a to="" className={`btn btn-link ${active === "tab7" ? "active" : ""}`} onClick={() => setActive("tab7")}><Circleinfo  className='icon-sidemenu' />    Iconography</a>
                    <a to="" className={`btn btn-link ${active === "tab8" ? "active" : ""}`} onClick={() => setActive("tab8")}><Tablecellslarge  className='icon-sidemenu' /> Layout</a>
                    <a to="" className={`btn btn-link ${active === "tab9" ? "active" : ""}`} onClick={() => setActive("tab9")}> <Paintbrush  className='icon-sidemenu' /> Logos</a>
                    {/* <a to=""  className={`btn btn-link ${active === "tab10"? "active":""}`}      onClick={() => setActive("tab10")}>Spacing & Padding</a>  */}
                    <a to="" className={`btn btn-link ${active === "tab11" ? "active" : ""}`} onClick={() => setActive("tab11")}><Filepowerpoint  className='icon-sidemenu' />  Typography</a>

                </div>
            </div>
            <div className='bodyrhs'>
                {/* {active === "tab1" && <div><OverviewMain title="Overview" /></div>} */}
                
                {/* {active === "tab2" && <div><AlignandRatio title="AlignandRatio" /></div>} */}
                {active === "tab1" && <div><Avatar title="Avatar" /></div>}
                {active === "tab4" && <div><Breakpoints title="Breakpoints" /></div>}
                {active === "tab5" && <div><ColorPalette title="Color Palette" /></div>}
                {active === "tab6" && <div><Grids title="Grids" /></div>}
                {active === "tab12" && <div><DesignStandards title="DesignStandards" /></div>}
                {active === "tab7" && <div><Iconography title="Iconography" /></div>}
                {active === "tab8" && <div><Layout title="Layout" /></div>}
                {active === "tab9" && <div><Logos title="Logos" /></div>}
                {/* {active === "tab10" && <div><SpacingandPadding title="Spacingand & Padding"/></div>} */}
                {active === "tab11" && <div><Typography title="Typography" />
                </div>}

            </div>
        </Container>

</>

 




    );
}

export default Overview;
