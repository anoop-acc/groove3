import React, { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap"


import Accordionmain from "./Accordionmain"
import Breadcrumbs from "./Breadcrumbs"
import Buttons from "./Buttons"
import CardTilesModals from "./CardTilesModals"
import CarouselPaginationSpinner from "./CarouselPaginationSpinner"
import Controls from "./Controls"
import Datatables from "./Datatables"
import InputFields from "./InputFields"
import Links from "./Links"
import Notifications from "./Notifications"
import ProgressBars from "./ProgressBar"
import Overlay from "./Overlay"
import Tags from "./Tags"
import Tooltips from "./Tooltips"
import List from "./List"
import linkarrow from "../images/angle-right-solid.svg"

import {ReactComponent as Angleright} from "../groovelibrary/FontAwesomeIconLibrary/regular/angle-right.svg"
import {ReactComponent as Fileinvoice} from "../groovelibrary/FontAwesomeIconLibrary/regular/file-invoice.svg"
import {ReactComponent as Ellipsis} from "../groovelibrary/FontAwesomeIconLibrary/regular/ellipsis.svg"
import {ReactComponent as Toggleon} from "../groovelibrary/FontAwesomeIconLibrary/regular/toggle-on.svg"
import {ReactComponent as Tablecolumns} from "../groovelibrary/FontAwesomeIconLibrary/regular/table-columns.svg"
import {ReactComponent as Magnifyingglass} from "../groovelibrary/FontAwesomeIconLibrary/regular/magnifying-glass.svg"
import {ReactComponent as Link} from "../groovelibrary/FontAwesomeIconLibrary/regular/link.svg"
import {ReactComponent as Alignjustify} from "../groovelibrary/FontAwesomeIconLibrary/regular/align-justify.svg"
import {ReactComponent as Circleexclamation} from "../groovelibrary/FontAwesomeIconLibrary/regular/circle-exclamation.svg"
import {ReactComponent as  Window} from "../groovelibrary/FontAwesomeIconLibrary/regular/window.svg"
import {ReactComponent as Gaugehigh} from "../groovelibrary/FontAwesomeIconLibrary/regular/gauge-high.svg"
import {ReactComponent as Tagsico} from "../groovelibrary/FontAwesomeIconLibrary/regular/tags.svg"
import {ReactComponent as Messagedots} from "../groovelibrary/FontAwesomeIconLibrary/regular/message-dots.svg"


function UiComponents(props) {
    const [active, setActive] = useState("tab1")
    const isActive = (key) => (active === key ? 'active' : '');


    // Component Overview
    function ComponentOverview(props) {


        const Tabs = [
            {
                tabname: "tab2",
                tabtitle: "Buttons",
                icon: "far fa-file-powerpoint"
            },
            {
                tabname: "tab3",
                tabtitle: "Card Tiles & Modals",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab4",
                tabtitle: "Carousel, Pagination &…",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab5",
                tabtitle: "Controls",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab6",
                tabtitle: "Data Tables",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab7",
                tabtitle: "Input Fields",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab8",
                tabtitle: "Links",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab9",
                tabtitle: "List",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab10",
                tabtitle: "Notifications",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab11",
                tabtitle: "Overlay",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab12",
                tabtitle: "Progress Bar",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab13",
                tabtitle: "Tags",
                icon: "far fa-file-powerpoint"
            }
            ,
            {
                tabname: "tab14",
                tabtitle: "Tooltips",
                icon: "far fa-file-powerpoint"
            }
        ];

        return (

            <div class="bodyrhs-section-plain overview  ">            
            <Row className="container-fluid  mx-auto p-0"> 
            <Col md="3" className=' p-0 lhs-emptyspace'></Col>
            <Col md="9" className='p-0 ps-5 text-start   landing-rs '>
            <h1>Overview </h1>
                <p>Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need and has been specifically created to work together to create patterns and intuitive user experiences.</p>
                {/* Below links should load by map , How to do that */}
                <div className='pt-3 card-set '>
                    {Tabs.map((obj, i) => (
                        <Card className=''>
                            <Card.Body>
                                <i className={obj.icon}></i>
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



            // <div className='overview bodyrhs-section'>
             
            // </div>
        );
    }

    // Component Overview ends 

    return (
        <Container   className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} fluid>
               <div className='sideNavMain'>
               <div sm="3" className='sideNav '>
                    <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>
                    {/* <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} >Overview</a> */}
                    <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} ><Angleright   className="icon-sidemenu" />Buttons</a>
                    <a to="" className={`btn btn-link ${active === "tab3" ? "active" : ""}`} onClick={() => setActive("tab3")} ><Fileinvoice  className="icon-sidemenu" />Card Tiles & Modals</a>
                    <a to="" className={`btn btn-link ${active === "tab4" ? "active" : ""}`} onClick={() => setActive("tab4")} ><Ellipsis  className="icon-sidemenu" />Carousel, Pagination & Spinner</a>
                    <a to="" className={`btn btn-link ${active === "tab5" ? "active" : ""}`} onClick={() => setActive("tab5")} ><Toggleon  className="icon-sidemenu" />Controls</a>
                    <a to="" className={`btn btn-link ${active === "tab6" ? "active" : ""}`} onClick={() => setActive("tab6")} ><Tablecolumns  className="icon-sidemenu" />Data Tables</a>
                    <a to="" className={`btn btn-link ${active === "tab7" ? "active" : ""}`} onClick={() => setActive("tab7")} ><Magnifyingglass  className="icon-sidemenu" />Input Fields</a>
                    <a to="" className={`btn btn-link ${active === "tab8" ? "active" : ""}`} onClick={() => setActive("tab8")} ><Link  className="icon-sidemenu" />Links</a>
                    <a to="" className={`btn btn-link ${active === "tab9" ? "active" : ""}`} onClick={() => setActive("tab9")} ><Alignjustify  className="icon-sidemenu" />List</a>
                    <a to="" className={`btn btn-link ${active === "tab10" ? "active" : ""}`} onClick={() => setActive("tab10")} ><Circleexclamation  className="icon-sidemenu" />Notifications</a>
                    <a to="" className={`btn btn-link ${active === "tab11" ? "active" : ""}`} onClick={() => setActive("tab11")} ><Window  className="icon-sidemenu" />Overlay</a>
                    <a to="" className={`btn btn-link ${active === "tab12" ? "active" : ""}`} onClick={() => setActive("tab12")} ><Gaugehigh  className="icon-sidemenu" />Progress Bar</a>
                    <a to="" className={`btn btn-link ${active === "tab13" ? "active" : ""}`} onClick={() => setActive("tab13")} ><Tagsico  className="icon-sidemenu" />Tags</a>
                    <a to="" className={`btn btn-link ${active === "tab14" ? "active" : ""}`} onClick={() => setActive("tab14")} ><Messagedots  className="icon-sidemenu" />Tooltips</a>
                     




                </div>
               </div>            

                    <div className='bodyrhs'>
                        {/* {active === "tab1" && <div><ComponentOverview title="Overview" /></div>} */}
                        {active === "tab1" && <div><Buttons title="Primary Buttons" /></div>}
                        {active === "tab3" && <div><CardTilesModals title="Tiles" /></div>}
                        {active === "tab4" && <div><CarouselPaginationSpinner title="Carousel, Pagination & Spinner" /></div>}
                        {active === "tab5" && <div><Controls title="Controls" /></div>}
                        {active === "tab6" && <div><Datatables title="Data Tables" /></div>}
                        {active === "tab7" && <div><InputFields title="Inputs" /></div>}
                        {active === "tab8" && <div><Links title="Links" /></div>}
                        {active === "tab9" && <div><List title="List" /></div>}
                        {active === "tab10" && <div><Notifications title="Notifications" /></div>}
                        {active === "tab11" && <div><Overlay title="Overlay" /></div>}
                        {active === "tab12" && <div><ProgressBars title="Progress Bar" /></div>}
                        {active === "tab13" && <div><Tags title="Tags" /></div>}
                        {active === "tab14" && <div><Tooltips title="Tooltips" /></div>}

                         
                        
                       
                       
                        
                        
                        
                        
                        
                        
                       
                        
                       
                       

                    </div>
              
        </Container>
    );
}

export default UiComponents;