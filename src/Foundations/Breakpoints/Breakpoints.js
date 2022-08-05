import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"
import breakpoint from "./images/breakpoints.png"

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function Breakpoints(props) {

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
                <NavLink className="transparent me-3  " to="/CoreuigrooveLanding/UiComponents"> <button className='btn-pagesub active'  variant="outline-dark" size="sm">Overview</button></NavLink>
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
                       

                        <p>
                            A breakpoint is the range of predetermined screen sizes with specific layout requirements.</p>
                        <p>
                            At a given breakpoint range, the layout of the content adjusts to suit the screen size and orientation of the user's device.
                        </p>
                        <img src={breakpoint} className="w-100" />

                        <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Breakpoint}
</pre>
<table class="table mt-4">
<thead>
<tr>
<th>Breakpoint</th>
<th>Class infix</th>
<th>Dimensions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Extra small</td>
<td><em>None</em></td>
<td>&lt;576px</td>
</tr>
<tr>
<td>Small</td>
<td><code>sm</code></td>
<td>≥576px</td>
</tr>
<tr>
<td>Medium</td>
<td><code>md</code></td>
<td>≥768px</td>
</tr>
<tr>
<td>Large</td>
<td><code>lg</code></td>
<td>≥992px</td>
</tr>
<tr>
<td>Extra large</td>
<td><code>xl</code></td>
<td>≥1200px</td>
</tr>
<tr>
<td>Extra extra large</td>
<td><code>xxl</code></td>
<td>≥1400px</td>
</tr>
</tbody>
</table>
</div>

                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Breakpoints;