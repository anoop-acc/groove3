import React, { useState } from "react";
import StandardApproach from "./StandardApproach"
import WorkReference from "./WorkReference.js"
import {  Row, Col } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";

function LayoutsTabs(props) {

//Get Code Toggle
const [codedivActive, setActivecode] = useState("false");
const handleToggle = () => {
  setActivecode(!codedivActive)
};



  const [active, setActive] = useState("tabA");
  const isActive = (key) => (active === key ? "active" : "");

  return (
    <div>
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
            <p>The layout is the structure used to organize content. The layout is the underlying grid structure of rows and columns used to organize content. It is a template that creates consistency by defining grids, spacing and sections. </p>   

            <div className="mb-0 customTabset">
              <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Example Layouts</Link>
              <Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Work Reference</Link>
            </div>

          </Col>
        </Row>

      </div>

      {active === "tabA" && <div className=""><StandardApproach title="Layout"  codedivActive={codedivActive} /></div>}
      {active === "tabB" && <div className=""><WorkReference /></div>}
    </div>


  );
}

export default LayoutsTabs;
