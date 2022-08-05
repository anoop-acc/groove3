import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col, Button } from "react-bootstrap"
import listspacing from "./Images/List/listspacing.png"
import ListTabs from "./List/ListTabs"
import "./List/listpagelayout.scss"

function List(props) {

    //Get Code Toggle
    const [codedivActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!codedivActive)
    };


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


                        <p>Lists are vertical groupings of related content that begin with a number or a bullet.</p>

                        <p>It is recommended to use a list in the following cases:</p>

                        <p>- To display and interact with simple data in a consistent format.</p>

                        <p>- For complex data sets, consider using a table instead of a group list.</p>

                        <p>Ensure those list items use icons, text and actions consistently, are clearly identifiable and are easy to scan.</p>

                        <p>List groups can be aided by sorting actions or even a search bar to provide more user control and ease of use.</p>
                    </Col>
                </Row>
            </div>


            <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h2>Anatomy of a Complex Structure for a List Item</h2>
                        <img src={listspacing} className="img-100" />

                        <Row>
                            <Col md="4"><h3>1. Label</h3>
                                <h3>2. Description and <br />
                                    Additional Information</h3>
                            </Col>
                            <Col md="4">
                                <h3>3. Supporting Visual</h3>
                                <h3>4. Left Action</h3>

                            </Col>
                            <Col md="4"><h3>5.  Right Action</h3></Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            <ListTabs codedivActive={codedivActive} />



        </div>
    );
}

export default List;