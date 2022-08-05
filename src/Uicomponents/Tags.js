import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Badge, Button } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import xmark from "../groovelibrary/FontAwesomeIconLibrary/regular/xmark.svg"

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Tags(props) {

  
    
    
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
                    
                    <p>Tags are used to categorize an item. Tag labels use dark color variations from the Supplemental color palette. Offered in 1 size, 1 weights, and 14 colors.</p>
                    <div className='tagSet'>
                    <Badge className='badge-groove'  bg="blue"  >Blue</Badge>
                    <Badge className='badge-groove' bg="caribbean" >Caribbean</Badge>                         
                         <Badge className='badge-groove' bg="coral" >Coral</Badge>
                        <Badge className='badge-groove' bg="cyan" >Cyan  </Badge>
                        <Badge className='badge-groove' bg="green" >Green</Badge>
                        <Badge className='badge-groove' bg="iris" >iris  </Badge>
                        <Badge className='badge-groove' bg="pink" >Pink  </Badge>
                        <Badge className='badge-groove' bg="plum" >plum</Badge>
                        <Badge className='badge-groove' bg="red" >red</Badge>
                        <Badge className='badge-groove' bg="teal" >Teal</Badge>
                        <Badge className='badge-groove' bg="yellow" >Yellow</Badge>
                        <Badge className='badge-groove' bg="white" >White</Badge>
                        <Badge className='badge-groove' bg="slate" >Slate</Badge>
                    </div>
                    <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Tags}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants (bg)</td>
<td className="p-2 border ">blue,caribbean,coral,cyan,green,iris,pink,plumred,teal,yellow,whiteslate 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">badge-groove</td>
</tr>
</table>
</div>
                    <h1 className='mt-5'> Labels</h1>
                    <p>Labels are used to select details of items in data searches and are allowed to be removed each of them by clicking on the “X” icon. Labels use dark color variations from the Supplemental color palette. </p>
                    <div className='tagSet'>
                    <Badge className='badge-groove'  bg="blue"  >Blue <i class="fa-solid fa-xmark" /></Badge>
                    <Badge className='badge-groove' bg="caribbean" >Caribbean <i class="fa-solid fa-xmark" /></Badge>                         
                         <Badge className='badge-groove' bg="coral" >Coral <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="cyan" >Cyan <i class="fa-solid fa-xmark" /> </Badge>
                        <Badge className='badge-groove' bg="green" >Green <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="iris" >iris  <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="pink" >Pink <i class="fa-solid fa-xmark" /> </Badge>
                        <Badge className='badge-groove' bg="plum" >plum <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="red" >red <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="teal" >Teal <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="yellow" >Yellow <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="white" >White <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="slate" >Slate <i class="fa-solid fa-xmark" /></Badge>
                       
                    </div>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Tagswithclose}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants (bg)</td>
<td className="p-2 border ">blue,caribbean,coral,cyan,green,iris,pink,plumred,teal,yellow,whiteslate 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">badge-groove</td>
</tr>
</table>
</div>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Tags;