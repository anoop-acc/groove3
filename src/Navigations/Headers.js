import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col, Button } from "react-bootstrap"



import Header from "../groovelibrary/Components/Header/Header"
import { Link } from "react-router-dom";

import Exceptions from "./HeaderTypes/Exceptions"
import StandardApproach from "./HeaderTypes/StandardApproach"

function Headers(props) {

    //enable tab div on click
    const [active, setActivetab] = useState("tabA");
    //active tab class
    const isActive = (key) => (active === key ? "active" : "");

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
                <Col lg="9" className='p-0 ps-lg-5 text-start'>
               
                    <p>The header is one of the most valuable section of the entire asset, especially since it occupies real state at the very top of the dashboard. Users should be able to recognice the brand and understand what the asset does as soon as they view the header.</p>
                    {/* Tabbed Area  Starts         */}
                    <div className="mb-4 customTabset">
                        <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActivetab("tabA")}>StandardApproach</Link>
                        <Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActivetab("tabB")}>Exceptions</Link>
                    </div>
                    <div className="tabContents">
                        {active === "tabA" && (<div className=""><StandardApproach codedivActive={codedivActive} /></div>)}
                        {active === "tabB" && (<div className=""><Exceptions codedivActive={codedivActive} /></div>)}
                    </div>

                    {/* Tabbed Area  Ends         */}





                </Col>
            </Row>
        </div>

        </>


    );
}

export default Headers;
