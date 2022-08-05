import React, { useState } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import { Row, Col, Container, Card  } from "react-bootstrap"

import Buttons from "./Storybook/Buttons.js"
 
import CardTilesModals from "./Storybook/CardTilesModals"
import CarouselPaginationSpinner from "./Storybook/CarouselPaginationSpinner"
import Controls from "./Storybook/Controls"
import Datatables from "./Storybook/Datatables"
import InputFields from "./Storybook/InputFields"
import Links from "./Storybook/Links"
import Notifications from "./Storybook/Notifications"
import ProgressBar from "./Storybook/ProgressBar"
import Overlay from "./Storybook/Overlay"
import Tags from "./Storybook/Tags"
import Tooltips from "./Storybook/Tooltips"
import List from "./Storybook/List"


function Storybook(props) {
    const [active, setActive] = useState("tab1");
    const isActive = (key) => (active === key ? 'active' : '');


    return (
        <div>
        <header className='innerpageHeader'>
          <Header/>
          </header>         
         
          <Container   className={`p-0 pb-3 containerMain ${active === "tab1" ? 'landing' : ''}`} fluid>
          <div className='sideNavMain'>
               <div sm="3" className='sideNav '>
                    <h2>Explore <i class="fa-solid fa-angle-down"></i></h2>
                    {/* <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} >Overview</a> */}
                    <a to="" className={`btn btn-link ${active === "tab0" ? "active" : ""}`} onClick={() => setActive("tab0")} > Introduction</a>
                    <a to="" className={`btn btn-link ${active === "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")} > Buttons</a>
                    <a to="" className={`btn btn-link ${active === "tab3" ? "active" : ""}`} onClick={() => setActive("tab3")} > Card Tiles & Modals</a>
                    <a to="" className={`btn btn-link ${active === "tab4" ? "active" : ""}`} onClick={() => setActive("tab4")} > Carousel, Pagination & Spinner</a>
                    <a to="" className={`btn btn-link ${active === "tab5" ? "active" : ""}`} onClick={() => setActive("tab5")} > Controls</a>
                    <a to="" className={`btn btn-link ${active === "tab6" ? "active" : ""}`} onClick={() => setActive("tab6")} > Data Tables</a>
                    <a to="" className={`btn btn-link ${active === "tab7" ? "active" : ""}`} onClick={() => setActive("tab7")} > Input Fields</a>
                    <a to="" className={`btn btn-link ${active === "tab8" ? "active" : ""}`} onClick={() => setActive("tab8")} > Links</a>
                    <a to="" className={`btn btn-link ${active === "tab9" ? "active" : ""}`} onClick={() => setActive("tab9")} > List</a>
                    <a to="" className={`btn btn-link ${active === "tab10" ? "active" : ""}`} onClick={() => setActive("tab10")} > Notifications</a>
                    <a to="" className={`btn btn-link ${active === "tab11" ? "active" : ""}`} onClick={() => setActive("tab11")} > Overlay</a>
                    <a to="" className={`btn btn-link ${active === "tab12" ? "active" : ""}`} onClick={() => setActive("tab12")} > Progress Bar</a>
                    <a to="" className={`btn btn-link ${active === "tab13" ? "active" : ""}`} onClick={() => setActive("tab13")} > Tags</a>
                    <a to="" className={`btn btn-link ${active === "tab14" ? "active" : ""}`} onClick={() => setActive("tab14")} > Tooltips</a>
                     




                </div>
               </div>       
               <div className='bodyrhs'>
               <div class="bodyrhs-section-plain">
        <Row className="container-fluid  mx-auto p-0">
          <Col md="3" className=' p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-lg-5 text-start'><h1 className='text-uppercase'>Storybook</h1> 
          <hr></hr>
          
          {active === "tab1" && <div><Buttons title="Buttons" /></div>}
                        {active === "tab3" && <div><CardTilesModals title="Card, Tiles & Modals" /></div>}
                        {active === "tab4" && <div><CarouselPaginationSpinner title="Carousel, Pagination & Spinner" /></div>}
                        {active === "tab5" && <div><Controls title="Controls" /></div>}
                        {active === "tab6" && <div><Datatables title="Data Tables" /></div>}
                        {active === "tab7" && <div><InputFields title="Inputs" /></div>}
                        {active === "tab8" && <div><Links title="Links" /></div>}
                        {active === "tab9" && <div><List title="List" /></div>}
                        {active === "tab10" && <div><Notifications title="Notifications" /></div>}
                        {active === "tab11" && <div><Overlay title="Overlay" /></div>}
                        {active === "tab12" && <div><ProgressBar title="Progress Bar" /></div>}
                        {active === "tab13" && <div><Tags title="Tags" /></div>}
                        {active === "tab14" && <div><Tooltips title="Tooltips" /></div>}
          
          
          
          
          
          </Col>
          </Row></div>
                   
                   

               
               </div>     
                {/* <div class="bodyrhs-section-plain overview  ">
                    <Row className="container-fluid  mx-auto p-0">
                        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                        <Col lg="9" className='p-0 ps-lg-5 text-start'>
                            <h1 className='border-bottom'>Story Book - Groove Core UI 3.0</h1>
       </Col></Row></div> */}
       </Container>
        <Footer/>
        </div>
    );
}

export default Storybook;