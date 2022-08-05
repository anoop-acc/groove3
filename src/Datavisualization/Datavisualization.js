

import React, { useState } from 'react';
import {Row, Col, Container, Card} from "react-bootstrap"
import "./css/DatavisualizationStyles.scss"

import Dashboard from "./Dashboard/Dashboard"
import DesignStandards from "./DesignStandards/DesignStandards"
import Charts from "./Charts/Charts"
import Filters from "./Filters/Filters"
import GraphTypes from "./GraphTypes/GraphTypes"
import Sections from "./Sections/Sections"
import Tooltips from "./Tooltips/Tooltips"

import linkarrow from "../images/angle-right-solid.svg"

import {ReactComponent as Palette } from "../groovelibrary/FontAwesomeIconLibrary/regular/palette.svg"
import {ReactComponent as Tablecells } from "../groovelibrary/FontAwesomeIconLibrary/regular/table-cells.svg"
import {ReactComponent as Alignleft } from "../groovelibrary/FontAwesomeIconLibrary/regular/align-left.svg"
import {ReactComponent as Filter } from "../groovelibrary/FontAwesomeIconLibrary/regular/filter.svg"
import {ReactComponent as Chartcolumn } from "../groovelibrary/FontAwesomeIconLibrary/regular/chart-column.svg"
import {ReactComponent as Stop } from "../groovelibrary/FontAwesomeIconLibrary/regular/stop.svg"
import {ReactComponent as Messagedots} from "../groovelibrary/FontAwesomeIconLibrary/regular/message-dots.svg"

function Datavisualization(props) {

const [active, setActive] = useState("tab2")
const isActive = (key) => (active === key ? 'active' : '');

// Component Overview
function OverviewMain(props) {


    const Tabs = [
        {
          tabname: "tab2",
          tabtitle:"Chart Color Palettes",
          icon:"fas fa-palette"   
        },
        {
            tabname: "tab3",
            tabtitle:"Dashboard",
            icon:"fas fa-th"  
        }
        ,
        {
            tabname: "tab4",
            tabtitle:"Design Standards", 
            icon:"fas fa-align-left"  
        }
        ,
        {
            tabname: "tab5",
            tabtitle:"Filters", 
            icon:"fas fa-filter"  
        } ,
        {
            tabname: "tab6",
            tabtitle:"Graph Types",
            icon:"fas fa-chart-bar"  
        }
        ,
        {
            tabname: "tab7",
            tabtitle:"Sections",
            icon:"far fa-square"  
        } 
        ,
        {
            tabname: "tab8",
            tabtitle:"Tooltips",
            icon:"far fa-comment-alt"   
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
           <i className={obj.icon}></i>  
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


<Container  className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} fluid> 
<div className='sideNavMain  '   >
            <div className='sideNav'>
            <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>
        {/* <a to="" className={`btn btn-link ${active === "tab1"? "active":""}`}    onClick={() => setActive("tab1")} >Overview</a>  */}
        <a to="" className={`btn btn-link ${active === "tab2"? "active":""}`}    onClick={() => setActive("tab2")} ><Palette   className="icon-sidemenu" /> Chart Color Palettes</a> 
        <a to="" className={`btn btn-link ${active === "tab3"? "active":""}`}    onClick={() => setActive("tab3")} ><Tablecells   className="icon-sidemenu" /> Dashboard</a> 
        <a to="" className={`btn btn-link ${active === "tab4"? "active":""}`}    onClick={() => setActive("tab4")} ><Alignleft  className="icon-sidemenu" /> Design Standards</a> 
        <a to="" className={`btn btn-link ${active === "tab5"? "active":""}`}    onClick={() => setActive("tab5")} ><Filter   className="icon-sidemenu" /> Filters</a> 
        <a to="" className={`btn btn-link ${active === "tab6"? "active":""}`}    onClick={() => setActive("tab6")} ><Chartcolumn   className="icon-sidemenu" /> Graph Types</a> 
        <a to="" className={`btn btn-link ${active === "tab7"? "active":""}`}    onClick={() => setActive("tab7")} ><Stop   className="icon-sidemenu" /> Sections</a> 
        <a to="" className={`btn btn-link ${active === "tab8"? "active":""}`}    onClick={() => setActive("tab8")} ><Messagedots  className="icon-sidemenu" /> Tooltips</a> 
    
   </div>
            </div>
            <div className='bodyrhs'>
            {/* {active === "tab1" && <div><OverviewMain title="" /> </div>} */}
            {active === "tab2" && <div><Charts title="Chart Color Palettes "/></div>}
            {active === "tab3" && <div><Dashboard title="Dashboard "/></div>}
            {active === "tab4" && <div><DesignStandards title="Design Standards "/></div>}
            {active === "tab5" && <div><Filters title="Filters" /></div>}
            {active === "tab6" && <div><GraphTypes title="Graph Types"/></div>}
            {active === "tab7" && <div><Sections title="Sections"/></div>}
            {active === "tab8" && <div><Tooltips title="Tooltips"/></div>}

</div>    
</Container>


    );
}

export default Datavisualization;

 