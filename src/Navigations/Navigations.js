import React, { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap"

import Header from "./Headers"
import SecondaryNavigation from "./SecondaryNavigation"
import Footers from "./Footers"
import Bestpractices from "./Bestpractices"
import linkarrow from "../images/angle-right-solid.svg"

import header from "./images/overview/header.png"
import typesofnavs from "./images/overview/typesofnavs.png"
import footer from "./images/overview/footer.png"
import bestpractices from "./images/overview/bestpractices.png"

import {ReactComponent as Layergroup} from "../groovelibrary/FontAwesomeIconLibrary/regular/layer-group.svg"
import {ReactComponent as Browser} from "../groovelibrary/FontAwesomeIconLibrary/regular/browser.svg"
import {ReactComponent as Fileinvoice} from "../groovelibrary/FontAwesomeIconLibrary/regular/file-invoice.svg"
import {ReactComponent as Starhalfstroke} from "../groovelibrary/FontAwesomeIconLibrary/regular/star-half-stroke.svg"

function Navigations(props) {

    const [active, setActive] = useState("tab1");
    const isActive = (key) => (active === key ? 'active' : '');

// Component Overview
function OverviewMain(props) {


    const Tabs = [
        {
          tabname: "tab2",
          tabtitle:"Header",
          icon:header 
        },
        {
            tabname: "tab3",
            tabtitle:"Types of Navigation",
            icon:typesofnavs
        }
        ,
        {
            tabname: "tab4",
            tabtitle:"Footer", 
            icon:footer 
        }
        ,
        {
            tabname: "tab5",
            tabtitle:"Best Practices", 
            icon: bestpractices
        }  
        
      ];
 
    return (
<>

        <div class="bodyrhs-section-plain overview">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
        <h1>Overview </h1>
        <p>Foundations are the visual elements needed to create engaging end-to-end user experiences. 
This includes guidance on iconography, typography, layout, and structure.</p>
<div  className='pt-3 card-set '> 
        {Tabs.map((obj, i) => (
           <Card className=''> 
            <Card.Body>
           {/* <i className={obj.icon}></i>   */}
           <img className='ovrwCardIcon' src={obj.icon} />
           <Card.Title>{obj.tabtitle}</Card.Title> 
           <Card.Link key={i} onClick={() => setActive(obj.tabname)} className="tab">
          Click to see more <img src={linkarrow}/>           
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


        <Container   className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} fluid>
            <div className='sideNavMain'>
                <div className='sideNav'>
                    <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>
                    {/* <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} > Overview        </a> */}
                    <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} ><Layergroup  className="icon-sidemenu" /> Header       </a>
                    <a to="" className={`btn btn-link ${active === "tab3" ? "active" : ""}`} onClick={() => setActive("tab3")} ><Browser  className="icon-sidemenu" /> Types of Navigation       </a>
                    <a to="" className={`btn btn-link ${active === "tab4" ? "active" : ""}`} onClick={() => setActive("tab4")} ><Fileinvoice  className="icon-sidemenu" /> Footers       </a>
                    <a to="" className={`btn btn-link ${active === "tab5" ? "active" : ""}`} onClick={() => setActive("tab5")} ><Starhalfstroke  className="icon-sidemenu" /> Best Practices       </a>



                </div>
            </div>
            <div className='bodyrhs'>
                {/* {active === "tab1" && <div><OverviewMain title="Overview" /></div>} */}
                {active === "tab1" && <div><Header title="Header" /></div>}
                {active === "tab3" && <div><SecondaryNavigation title="Types of Navigation" /></div>}
                {active === "tab4" && <div><Footers title="Footers" /></div>}
                {active === "tab5" && <div><Bestpractices title="Best Practices" /></div>}
            </div>
        </Container>







    );
}

export default Navigations;