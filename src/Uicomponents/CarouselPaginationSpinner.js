import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import {Row, Col, Button } from "react-bootstrap"

import carousal1 from "./././Images/Carousel/carousal1.png"
import carousal2 from "./././Images/Carousel/carousal2.png"
import carousal3 from "./././Images/Carousel/carousal3.png"
import pagination from "./././Images/Carousel/pagination.png"
import hscroll from "./././Images/Carousel/h-scrollbar.png"
import vscroll from "./././Images/Carousel/v-scrollbar.png"
import spinner  from "./././Images/Carousel/spinner.png"

import CarouselComponent from "./Carousel/CarouselComponent"
import { ReactComponent as Circlecheck } from "./Images/Carousel/circle-check.svg";
import Pagination from "./Pagination/PaginationComponent"

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function CarouselPaginationSpinner(props) {

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
         
            <p>Use the Carousel Component to let the user navigate through a collection of images/data in a sequential fashion, moving to the previous/next one through the arrows on the sides. </p>
     <div className='mb-3'><img src={carousal1} /></div>
       <h2>Carousel Usage</h2>
       <p>The previous and next navigation buttons of the Carousel should always appear on top of the image slide, and the indicators should have consistent styling, where only the active one should be emphasized.</p>
      <Row>
          <Col md="6 px-0"><div className="sample" style={{width:"421px", textAlign:"center"}}>
            {/* <img src={carousal2} className='w-75'/> */}
            <Circlecheck className="icon26 svgicon-green my-2" />
            <CarouselComponent />
            </div>
          
          </Col>
          <Col md="6 pe-0"><div  ><img src={carousal3} className='w-75'/></div></Col>
      </Row>
      
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Carouselcode}
</pre>
</div>
      <h1 className="my-3">Pagination</h1>
      <p>Pagination is used for splitting up content or data into several pages, one can navigate between these pages by clicking links, often in the form of numbers located at the bottom of a page</p>
      <div className='mb-3'>
        <Pagination/>
        {/* <img src={pagination} className="w-90" /> */}
        </div>
   
      <h2>Pagination Usage</h2>
      <Row>
          <Col md="6">
          <h3>1. Provide large clickable areas</h3>
      <p>To make them more effective and userfriendly, give them some proper visual design and give each link a large clickable area, that's visually identifiable. By large, a good rule of thumb is "twice as wide as the number, and 1.5 times its height.</p>
         
          </Col>
          <Col md="6">
              <h3>2. Don't use underlines</h3>
              <p>Underlines for links are generally a good idea, as users are most familiar with links having underlines, but for pagination links as well as (obvious) main menu links, underlines are superfluous.</p>
          </Col>
      </Row>
      <Row>
          <Col md="6">
          <h3>3. Identify the current page</h3>
      <p> The current page should be significantly different in style from the other pages, so that a user can easily keep track of where one is.</p>
         
          </Col>
          <Col md="6">
              <h3>4. Space out page links</h3>
              <p>Provide enough space between each page link so that a user can not accidentally click on the wrong page number.</p>
          </Col>
      </Row>
      <Row>
          <Col md="6"><h3>5. Provide Previous and Next links</h3>
          <p>In virtually any context where pagination exists or can exist, Previous and Next links are useful to have. So offer them. But, separate them cleanly from the page numbers and give them sufficient distance or unique styling so that they can't be mistaken as a page; this is particularly pertinent if you use arrows instead of text for Previous and Next</p>
          </Col>
          <Col md="6">
<h3>6. Provide Previous and Next links</h3>
<p>Offer a First, a Last, or both First and Last links, whichever is appropriate. but disable the respective link when the user is on the First or Last page.</p>

          </Col>
      </Row>
      
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.PaginationCode}
</pre>
</div>
      <h1>Scroll </h1>
      <p>Scrolling is the sliding movement of data across a section either vertically or horizontally.</p>
     <h3>Horizontal Scroll</h3>
     <p>Offer a First, a Last, or both First and Last links, whichever is appropriate. but disable the respective link when the user is on the First or Last page.</p>
     <div className='mb-3'><img src={hscroll} className= "w-100" style={{maxWidth:"500px"}} /></div>
      <h3>Vertical Scroll</h3>
      <p>Offer a First, a Last, or both First and Last links, whichever is appropriate. but disable the respective link when the user is on the First or Last page.</p>
      <div className='mb-3'><img src={vscroll} className="w-100" style={{maxWidth:"500px"}} /></div>
   
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
    <h1>Spiner</h1>
    <p>Spinners provide a visual cue that an action is either processing, awaiting a course of change or a result.</p>
     <div className='mb-3'>
     <i className="fa-solid fa-spinner rotate" style={{fontSize:"36px"}} ></i>
        {/* <img src={spinner} className="" /> */}
        </div>
     
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Spinner}
</pre>
</div>
        </Col>
        </Row>
        </div>

</>
 
    );
}

export default CarouselPaginationSpinner;