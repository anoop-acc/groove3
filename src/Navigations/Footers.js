import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import {Row, Col, Button} from "react-bootstrap"

import light from "./images/footers/light.png"
import dark from "./images/footers/dark.png"
import anatomyoffooter from "./images/footers/anatomyoffooter.png"
import genericfooter from "./images/footers/genericfooter.png"

import Footer from "./Footers/Footer"

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Footers(props) {

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
        
              <p>The footer is an area at the bottom of a document page containing data common to other pages. The purpose of the footer is to help visitors by adding information and navigation options at the bottom of the product.</p>
       <h2>Standard Approach - Primary  Footer</h2>
       <h4>Recommended Primary Footer - Light mode </h4>
        
<img className="w-100" src={light} />
<h4 className="mt-3">Alternate Primary Footer - Dark mode </h4>
<img className="w-100" src={dark} />
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<NavLink className="demo" to="/Footer" target={"_blank"} >Demo</NavLink>
<pre>
{codeItem.footercode}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants </td>
<td className="p-2 border ">light, dark 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">footer-groove</td>
</tr>
</table>
</div>
       <h2 className="mt-3">Anatomy of a footer</h2>
       <p>The footer component is a permanent UI element that contains Accenture Logo, Date of Creation and Copyrights, Terms of Use, Privacy Statement, Contact Support, and SynOps Logo and Taglines.</p>
       <img className="w-100" src={anatomyoffooter} />
       <h2>Generic  Footer</h2> 
       <img className="w-100" src={genericfooter} />
        </Col>
        </Row>
        
        </div>

        </>
 
    );
}

export default Footers;