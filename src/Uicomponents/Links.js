import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col, ListGroup, Button } from "react-bootstrap"

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Links(props) {

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

                        <p>Links are interactive elements that allow users to navigate to a new page or website or jump to a section of the current page.</p>
                        <h3>1. Buttons versus links</h3>
                        <p>Buttons and links are not used for the same purpose. Choosing the right use case will make the experience clear for all users, particularly for those with cognitive and learning disabilities and for those using screen readers.</p>
                        <ListGroup as="ul" className='mb-4'>
                            <ListGroup.Item as="li" active>
                                <div className='   col-md-2'>Element</div>
                                <div className='flex-grow-1   col-md-10'>Use Cases</div>

                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className='   col-md-2'>Link</div>
                                <div className='flex-grow-1  col-md-10'>Use to navigate a user to another page or website, another place on the same page, or to open a link in a new tab.</div>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <div className='  col-md-2'>Button</div>
                                <div className='flex-grow-1   col-md-10'>Use to trigger an action on a page or to complete tasks in forms, dialogs, and modals. Exception: “Back” and “Next” buttons may be used to navigate a wizard.</div>
                            </ListGroup.Item>
                        </ListGroup>
                        <h3>2. Standalone link</h3>
                        <p>These links are used for navigation and may feature an icon, but are not underlined, except in hover and focus states. Typically, standalone links are used for a navigation menu or as a list of links. If placed by itself, the link should feature an icon to help users anticipate which action the link will trigger.</p>
                        <h4>Default State </h4>
                        <div className='border p-2 px-5 d-flex justify-content-between'>

                            <a href="#" class="link-groove  link-blue">Primary link</a>
                            <a href="#" class="link-groove  link-primary">Primary link</a>
                            <a href="#" class="link-groove  link-dark">Primary link</a>
                            <a href="#" class="link-groove  link-gray">Primary link</a>
                        </div>
                        <h4 className='mt-4'>Hover/Focus State</h4>
                        <div className='border p-2 px-5 d-flex justify-content-between'>

                            <a href="#" class="link-groove active link-blue">Primary link</a>
                            <a href="#" class="link-groove active link-primary">Primary link</a>
                            <a href="#" class="link-groove active link-dark">Primary link</a>
                            <a href="#" class="link-groove active link-gray">Primary link</a>
                        </div>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                {codeItem.Linkscode}
                            </pre>
                            <table className='codetable border mt-3'>
                                <tr>
                                    <td className="p-2 border w-25">Color Variants class</td>
                                    <td className="p-2 border ">
                                        link-blue, link-primary, link-dark, link-gray
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border w-25">Custom Class</td>
                                    <td className="p-2 border ">
                                        link-groove
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Links;