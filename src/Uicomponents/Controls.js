import React, { useState } from "react";
import RangeSlider from "./RangeSlider"
import Slider from "./Slider"
import SliderComponent from "./Controls/SliderComponent"

import { Row, Col, Card, Button, Form } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;




function Controls(props) {


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
        
          <p>Controls are simple interactions that present a more direct way to capture the user's input. Controls are used primarily in forms and experiences where precise selection and filtering of data is required.</p>
          <h3>Checkbox</h3>
          <p>Checkboxes allow the user to select one or more items from a set. A common UI element for all users, Checkboxes are typically used in forms, profile pages, and lists to capture preferences or to filter data.</p>

          <Form>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check className='checkbox-groove'
                  inline
                  label="Unselected"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check className='checkbox-groove'
                  inline
                  checked
                  label="Selected"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check className='checkbox-groove'
                  inline
                  disabled
                  label="Disabled"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <pre  >
            {codeItem.checkbox}
            </pre>
          </div>

          <h3>Radio Button</h3>
          <p>Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. Clicking a non-selected radio button will deselect whatever other button was previously selected in the list. Since they are used to select only one value in a form or in a section of a page, Radio Buttons should always be used in conjunction with at least one or more Radio Button selection options.</p>


          <div>

            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3 ">
                  <Form.Check className='radiobutton-groove'
                    inline
                    label="Unselected"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check className='radiobutton-groove'
                    inline
                    checked
                    label="Selected"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check className='radiobutton-groove'
                    inline
                    disabled
                    label="Unselected - Disabled"
                    type={type}
                    id={`inline-${type}-3`}
                  />

                </div>
              ))}
            </Form>



          </div>

          <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <pre  >
            {codeItem.radiobutton}
            </pre>
          </div>

          <h3>Toggle Switch</h3>
          <p>Toggle switches are common UI control in digital interfaces. Similar to Radio Buttons, they allow users to choose between two mutually exclusive options, and the one option should always be enabled by default. Toggle switches are best used for changing system settings and user preferences. A good example of using Toggle Switches would be when a user is configuring their profile to indicate if they want to turn on/off notifications. Use sparingly in conjunction with other selection controls like Radio Buttons or Checkboxes.</p>
          <div class="mb-3 ">
            <Form>
              <Form.Check className='switch-groove form-switch-inline'
                type="switch"
                id="custom-switch"
                label="off"
              />
              <Form.Check className='switch-groove form-switch-inline'
                type="switch"
                checked
                id="custom-switch"
                label="on"
              />
              <Form.Check className='switch-groove form-switch-inline'
                disabled
                type="switch"
                label="off disabled"
                id="disabled-custom-switch"
              />
              <Form.Check className='switch-groove form-switch-inline'
                disabled
                type="switch"
                checked
                label="on disabled"
                id="disabled-custom-switch"
              />
            </Form>
          </div>
          <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <pre  >
            {codeItem.toggle} 
            </pre>
          </div>
          <h3>Slider</h3>
          <p>Sliders provide a visual indication of adjustable content, where the user can increase or decrease the value by moving the handle along a horizontal track.</p>

          <Row>
          <Col md="6"><SliderComponent slidervalue="30" variant="primary"/></Col>
              <Col md="6"><SliderComponent slidervalue="50" variant="blue"/></Col>
            {/* <Col sm="6">
              <h4>Current state</h4>
              <div className='sliderContainer'>
                <label className='label-start'>0%</label>
                <label className='label-mid'>50%</label>
                <label className='label-end'>100%</label>
                <div className='sliderContainer'><Slider varient="blue" defaultValue="50" /></div>
              </div>



            </Col>
            <Col sm="6">
              <h4>Future state</h4>
              <div className='sliderContainer'>
                <label className='label-start'>Slow</label>
                <label className='label-mid'>Moderate</label>
                <label className='label-end'>Accelerated</label>
                <Slider varient="primary" defaultValue="40" /></div>
            </Col> */}
          </Row>
          <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <pre>             
             {codeItem.slidercode}             
            </pre>
          </div>
        </Col>
      </Row>
    </div>

</>

  );
}

export default Controls;