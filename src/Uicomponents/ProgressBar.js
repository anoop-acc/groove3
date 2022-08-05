
import { Row, Col, ProgressBar, Button } from "react-bootstrap"
import RangeSlider from "./RangeSlider"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Progress } from 'antd';

import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function ProgressBars(props) {




    //Get Code Toggle
    const [codedivActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!codedivActive)
    };

    const percentage = 66;
    const value = 0.90;
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
               
                    <p>A progress indicator is a visual representation of a user’s progress through a set of steps, guiding toward the completion of a specified process.</p>
                    <h3>Basic Flat </h3>
                    <Row>
                        <Col sm="2">
                            <div className='progressbar-groove-wrapper '>
                                <label><b>{`${0}%`}</b> complete</label>
                                <ProgressBar now={0} label={`${0}%`} variant="secondary" className='progressbar-groove' />
                            </div>

                            <div className='progressbar-groove-wrapper mt-4'>
                                <label><b>{`${100}%`}</b> complete</label>
                                <ProgressBar now={100} label={`${100}%`} variant="blue" className='progressbar-groove' />
                            </div>


                        </Col>
                        <Col sm="2">
                            <div className='progressbar-groove-wrapper '>
                                <label><b>{`${60}%`}</b> complete</label>
                                <ProgressBar now={60} label={`${60}%`} variant="warning" className='progressbar-groove' />
                            </div>

                            <div className='progressbar-groove-wrapper mt-4'>
                                <label><b>{`${60}%`}</b> complete</label>
                                <ProgressBar now={60} label={`${60}%`} variant="primary" className='progressbar-groove' />
                            </div>


                        </Col>
                        <Col sm="2">
                            <div className='progressbar-groove-wrapper  '>
                                <label><b>{`${60}%`}</b> complete</label>
                                <ProgressBar now={60} label={`${60}%`} variant="success" className='progressbar-groove' />
                            </div>
                        </Col>
                        <Col sm="6"></Col>

                    </Row>
<div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Progressbar}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants</td>
<td className="p-2 border ">primary, blue, success, warning, danger, secondary, info, dark, gray, light. 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">progressbar-groove-wrapper, progressbar-groove</td>
</tr>
</table>
</div>
                    <h2 className='my-4'>Basic Gauge </h2>
                    <Row>
                        <Col md="3">
                            <div className='CircularProgressbar-card progressbar-circle-groove '>
                                <div className='gauge-progressbar-wrapper' >
                                    <Progress type="dashboard" variant="blue" percent={75} gapDegree={130} strokeWidth={12} width="162px" height="162px" />
                                </div>
                                <label>Lorem Ipsum</label>
                            </div>

                        </Col>
                        <Col md="3">
                            <div className='CircularProgressbar-card progressbar-circle-groove '>
                                <div className='gauge-progressbar-wrapper' >
                                    <Progress type="dashboard" variant="primary" percent={50} gapDegree={130} strokeWidth={12} width="162px" height="162px" />
                                </div>
                                <label>Lorem Ipsum</label>
                            </div>

                        </Col>
                    </Row>
                    <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                        <pre>
                        {codeItem.BasicGauge}
                        </pre>
                        <table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants</td>
<td className="p-2 border ">primary, blue, success, warning, danger, secondary, info, dark, gray, 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">progressbar-circle-groove</td>
</tr>
</table>
                    </div>
                    <h2 className='my-4'>Basic Radial </h2>
                    <Row>
                        <Col md="3">
                            <div className='CircularProgressbar-card progressbar-circle-groove  '>                                
                                <Progress type="circle" variant="primary" percent={75} format={(percent) => `${percent} %`} strokeWidth={12} width="162px" />
                                <label>Lorem Ipsum</label>
                            </div>

                        </Col>
                        <Col md="3">
                            <div className='CircularProgressbar-card progressbar-circle-groove '>
                                <Progress type="circle" variant="blue" percent={90} format={(percent) => `${percent} %`} strokeWidth={12} width="162px" />
                                <label>Lorem Ipsum</label>
                            </div>

                        </Col>
                    </Row>
                    <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                        <pre>
                            {codeItem.BasicRadial}
                        </pre>
                        <table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants</td>
<td className="p-2 border ">primary, blue, success, warning, danger, secondary, info, dark, gray, 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">progressbar-circle-groove</td>
</tr>
</table>
                    </div>

                </Col>
            </Row>
        </div>
        </>
    );
}

export default ProgressBars;