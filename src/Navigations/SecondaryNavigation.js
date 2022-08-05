import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"

import Bannerlinks from "./images/typesofnavs/img1.png"
import Plainlinks from "./images/typesofnavs/img2.png"
import secondaryNavs from "./images/typesofnavs/secondaryNavs.png"
import hamburgerMenu from "./images/typesofnavs/hamburgerMenu.png"
import sidemenuOpen from "./images/typesofnavs/sidemenuOpen.png"
import sidemenuClosed from "./images/typesofnavs/sidemenuClosed.png"
import TreeMenuOpen from "./images/typesofnavs/TreeMenuOpen.png"
import TreeMenuClosed from "./images/typesofnavs/TreeMenuClosed.png"
import buttonNav from "./images/typesofnavs/buttonNav.png"
import sideBanner from "./images/typesofnavs/sideBanner.png"
import folderTreeMenu from "./images/typesofnavs/folderTreeMenu.png"

import buttonnavs from "./images/Navigations/buttonnavs.png"
import breadcrumbs from "./images/Navigations/breadcrumbs.png"

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;


function SecondaryNavigation(props) {

    //Get Code Toggle
    const [codedivActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!codedivActive)
    };


    return (
        <>
            <div class="bodyrhs-section-gray mb-0 pb-0  ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h1 className='mb-3 pagetitle'>{props.title}
                            <div>
                                <span className='ms-auto mt-4  d-flex'>
                                    <NavLink className="transparent me-3  " to="/CoreuigrooveLanding/UiComponents"> <button className='btn-pagesub active' variant="outline-dark" size="sm">Overview</button></NavLink>
                                    <NavLink className="transparent me-3 " to=""  > <button className={`btn-pagesub ${codedivActive ? "" : "active"}`} variant="outline-dark" size="sm" onClick={handleToggle}>{codedivActive ? "Get Code" : "Hide Code"}</button></NavLink>
                                    <NavLink className="transparent " to=""> <button className='btn-pagesub' variant="outline-dark" size="sm">Accessibility</button></NavLink>
                                </span>
                            </div>
                        </h1>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'> <h1 className='pagetitle'>{props.title}</h1>
                        <p>The header is one of the most valuable sections of the entire asset, especially since it occupies the real state at the very top of the dashboard. Users should be able to recognize the brand and understand what the asset does as soon as they view the header.</p>
                        <h2>Primary Navigation</h2>
                        <h3 className='my-3'>Top Banner Links</h3>
                        <p>
                            Top navigation is the standard for all products when it comes to information architecture and getting the user to the main areas of your product clearly and efficiently.
                        </p>
                        <p>
                            There should be no more than 5 banner links in your product. If more than 5 banner links are needed, then the navigation scheme needs to be refined and it may be necessary to use drop-down menus. Top banner links labels should be descriptive and no more than two words.
                        </p>
                        <img src={Bannerlinks} />
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                {codeItem.navbasic}
                            </pre>
                        </div>
                        <h3 className="mt-4">Tab Navigation</h3>
                        <p>
                            Page tabs are perfect for presenting different types of information and content to the user, allowing them to rapidly toggle back and forth while staying on the same page without having to refresh it.</p>

                        <p>Groove products use page tabs extensively to better organize content and to de-clutter the page contents, making it easier for them to focus on the chunks of content versus a long vertically scrolling page.</p>
                        <Row>
                            <Col md="3"><img className='w-100' src={Plainlinks} /></Col>
                            <Col md="6">
                                <p>The approach can be used when navigation tabs remain content with data points throughout the assets.</p>
                            </Col>
                        </Row>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                            {codeItem.navTabs}
                            </pre>
                        </div>
                        <h3 className='mt-4 mb-3'>Breadcrumbs</h3>
                        <p>A Breadcrumb is a type of secondary navigation scheme that reveals the user’s location in a website or Web application that allows them to navigate back through the site's levels.</p>
                       <h4 className="h4">Primary</h4>
                       <img src={breadcrumbs} style={{maxWidth:"420px"}} className="w-100 mt-2 mb-3"/>
                       <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                            {codeItem.breadcrumb}
                            
                            </pre>
                        </div>
                        <h2>Secondary  Headers</h2>
                        <p>Standard navigation approaches are commonly followed on the dashboard. This approach is placed below the header section, one can usually find the most important screen selected in this navigation as a default screen.</p>
                        <img className='w-100 w-max-1000' src={secondaryNavs} />
                     

                        <h2 className='mt-3'>Hamburger Menu  Header</h2>
                        <p>Includes a Hamburger Icon to show and hide a left pannel section that can be used for navigation or filtering.</p>
                        <img className='w-100 w-max-1000' src={hamburgerMenu} />
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                Hamburger Menu  Header
                            </pre>
                        </div>
                        <h2 className='mt-3'>Button Navigation</h2>
                        <img className='w-100 w-max-1000' src={buttonnavs} />
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                Button Navigation
                            </pre>
                        </div>
                        <h2 className='mt-4'>Open  Menu  Header</h2>
                        <Row>
                            <Col md="5">
                                <h4>Recommended - Light mode view </h4>
                                <img style={{ height: "600px" }} src={sidemenuOpen} />

                            </Col>
                            <Col md="4">
                                <h4>Collapsed - Light mode view  </h4>
                                <img style={{ height: "600px" }} src={sidemenuClosed} />
                            </Col>
                        </Row>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                Open  Menu  Header
                            </pre>
                        </div>
                        <Row className='mt-4'>
                            <Col md="5">
                                <h2>Tree Menu - Light mode view  </h2>
                                <img style={{ height: "600px" }} src={TreeMenuOpen} />
                            </Col>
                            <Col md="4">
                                <h4>Mega Menu - Light mode view </h4>
                                <img style={{ height: "600px" }} src={TreeMenuClosed} />
                            </Col>
                        </Row>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                Tree Menu
                            </pre>
                        </div>


                        <Row>
                            <Col md="8">
                                <h2 className='mt-4'>Side Banner</h2>
                                <p> There are cases where additional navigation is required for more complex pages or features.</p>
                                <p>
                                    Side navigation is a good way to organize page content, as it will help navigate easily between category pages because it is collapsible or presented full time on the screens.
                                </p>   </Col>
                            <Col md="4"><img style={{ height: "430px" }} src={sideBanner} /></Col>
                        </Row>
                        <Row>
                            <Col md="4"> <img style={{ height: "920px" }} src={folderTreeMenu} /></Col>
                            <Col> <h2>Folder Tree Menu</h2>
                                <p> The Folder Tree is a common user-interface both for navigation and representing the folder hierarchy of the file system.</p>
                                <p>
                                    When users activate an item that represents a file name in the below tree, the name of the selected file appears in the read-only edit field next to the tree.
                                </p>

                            </Col>
                        </Row>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                Folder Tree Menu
                            </pre>
                        </div>

                    </Col>
                </Row>
            </div>

        </>



    );
}

export default SecondaryNavigation;