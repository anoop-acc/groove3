import { useState } from "react";
import { Row, Col, FloatingLabel, Form, Dropdown, Button } from "react-bootstrap"
import listitemstypes from "./Images/Inputs/list-item-types.png"
import Fileupload from "./Inputs/Fileupload"
import 'antd/dist/antd.css'; 
import { DatePicker, Space } from 'antd';

import { NavLink } from 'react-router-dom'

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function InputFields(props) {

  //Get Code Toggle
  const [codedivActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!codedivActive)
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("|");
  const [value3, setValue3] = useState("Enter text here …");
  const [value4, setValue4] = useState("Input value");
  const [value9, setValue9] = useState("Input value");
  const [value5, setValue5] = useState("Valid Default");
  const [value6, setValue6] = useState("Valid Focus");
  const [value7, setValue7] = useState("InValid Default");
  const [value8, setValue8] = useState("InValid Focus");

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
         
          <p>Typically experienced in sign-on sequence, forms, and micro-transactions, inputs are how we capture information provided by the user.</p>
          <h2>Text Fields</h2>
          <p>Text fields require the user to enter the text from a keyboard or assisted input device. When no data is entered into a field, they will default to the empty default state with the label inside the field. Upon focus, the field label will shrink in size and move to the upper left corner of the field box retaining the label along with the field value.</p>
          <h3>Empty</h3>
          <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Default"
                className="mb-3 form-floating-groove">
                <Form.Control className="form-control-groove" type="text" placeholder=" " 
                 value={value1}
                 onChange={(event) => setValue1(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="FOCUS"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove active" type="text" placeholder=" " 
                 value={value2}
                 onChange={(event) => setValue2(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Disabled"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove" disabled type="text" placeholder="name@example.com" 
                 value={value3}
                 onChange={(event) => setValue3(event.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <h3>Filled</h3>
          <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Default"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove active" type="text" placeholder="name@example.com" 
                 value={value4}
                 onChange={(event) => setValue4(event.target.value)}
                />
              </FloatingLabel>


            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="FOCUS"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove" type="text" placeholder="name@example.com" 
                 value={value9}
                 onChange={(event) => setValue9(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Disabled"
                className="mb-3 form-floating-groove"
              >
                <Form.Control   className="form-control-groove" disabled type="text" placeholder="name@example.com" value="Enter text here …" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove is-valid" type="text" placeholder="name@example.com" 
                 value={value5}
                 onChange={(event) => setValue5(event.target.value)}
                />
              </FloatingLabel>


            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove "
              >
                <Form.Control className="form-control-groove is-valid active" type="text" placeholder="name@example.com" 
                 value={value6}
                 onChange={(event) => setValue6(event.target.value)}
                />
              </FloatingLabel>
            </Col>           
          </Row>

          <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove is-invalid" type="text" placeholder="name@example.com" 
                 value={value7}
                 onChange={(event) => setValue7(event.target.value)}
                />
              </FloatingLabel>


            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove "
              >
                <Form.Control className="form-control-groove is-invalid active" type="text" placeholder="name@example.com" 
                 value={value8}
                 onChange={(event) => setValue8(event.target.value)}
                />
              </FloatingLabel>
            </Col>           
          </Row>
          <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.inputtext}
</pre>
</div> 

<h2>Text Box Fields</h2>
<p>Text boxes are used to capture longer strings of field input from the user. In most experiences, TextBoxes are used for capturing descriptions or comments in a form. They can be supported with validation as well to provide the user useful feedback. A good example of this would be a Text Box field that is limited to a certain amount of characters with the validation feedback indicating if the user is under or over the limit.</p>
<h3>Empty</h3>
<Row className="mb-4">
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>Default</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
  </Col>
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>Focus</Form.Label>
    <Form.Control className="form-control-groove active" as="textarea" rows={3} Placeholder="| "/>
 </Form.Group>

  </Col>
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>Disabled</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="Enter text here …" disabled/>
 </Form.Group>
  </Col>
</Row>

<h3>Filled</h3>
<Row className="mb-4">
<Col md="4">
<Form.Group className="form-textarea-groove"  >
    <Form.Label>Default</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
</Col>
<Col md="4">
<Form.Group className="form-textarea-groove"  >
    <Form.Label>Focus</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
</Col>
<Col md="4">
<Form.Group className="form-textarea-groove"  >
    <Form.Label>Default</Form.Label>
    <Form.Control disabled className="form-control-groove" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
</Col>
</Row>
<Row className="mb-4">
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Default</Form.Label>
    <Form.Control className="form-control-groove is-valid" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
  </Col>
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Focus</Form.Label>
    <Form.Control className="form-control-groove is-valid active" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
  </Col>
  <Col md="4"></Col>
</Row>
<Row className="mb-4">
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Default</Form.Label>
    <Form.Control className="form-control-groove is-invalid" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
  </Col>
  <Col md="4">
  <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Focus</Form.Label>
    <Form.Control className="form-control-groove is-invalid active" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
  </Col>
  <Col md="4"></Col>
</Row>
{/* <Form.Control className="form-control-groove" size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control className="form-control-groove" type="text" placeholder="Normal text" />
  <br />
  <Form.Control className="form-control-groove" size="sm" type="text" placeholder="Small text" /> */}
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Textarea}
</pre>
</div>
<h3  >Drop-down Fields</h3>
<p>
In order to improve the user experience, use Drop-down inputs when presenting standardized options to the user. For example, using a Drop-down input for a list of offerings or industries in Accenture Operations is a good use of this input. It’s important to mention the standard space between the input box and the dropdown list should be 12px. 
</p><p>
Use caution when presenting more than 15-20 options as this can become a frustrating user experience. Consider including a search bar at the top of your drop-down list in this case.
</p>

<Row>
  <Col md="3">
  <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
    Select...
    <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>

  <Dropdown.Menu>
   
    <Dropdown.Item href="#/action-1">List Item 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">List Item 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">List Item 3</Dropdown.Item>
    <Dropdown.Item href="#/action-4">List Item 4</Dropdown.Item>
    <Dropdown.Item href="#/action-5">List Item 5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    
  </Col>
  <Col md="3">
  <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
    Select...
    <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>

  <Dropdown.Menu>   
    <Dropdown.Item href="#/action-1">List Item 1   </Dropdown.Item>
    <Dropdown.Item href="#/action-2">List Item 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">List Item 3</Dropdown.Item>
    <Dropdown.Item href="#/action-4">List Item 4</Dropdown.Item>
    <Dropdown.Item href="#/action-5">List Item 5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


  </Col>
  <Col md="3">
  <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
    Select...
    <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>

  <Dropdown.Menu>   
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
     onClick={(e) => e.stopPropagation()} 
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
     onClick={(e) => e.stopPropagation()} 
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
     onClick={(e) => e.stopPropagation()} 
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
     onClick={(e) => e.stopPropagation()} 
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
     onClick={(e) => e.stopPropagation()} 
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
  </Col>
  <Col md="3">x</Col>
</Row>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.Dropdown}
</pre>
</div>
<h3 className="my-3">Contents</h3>
<img src={listitemstypes} />
<h3>Date Fields</h3>
<p>Date Fields are presented for the users to select either one specific date or a range of dates for a project. An example could be to select the start date and end date of a project. </p>
<Row className="my-3">
  <Col md="3"><DatePicker onChange={onChange} className="datepicker-groove" /></Col>
  <Col md="3"></Col>
</Row>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.DateFields}
</pre>
</div>
<h3>Search Inputs</h3>
<p>These search bars are for users to look for a specific element throughout the page they’re at.</p>
<h3>Empty</h3>
<Row className="my-3">
  <Col md="3"> 
  <Form>
  <Form.Group className="mb-3"  >     
    <Form.Control type="text" placeholder="Search" className="form-control-search-groove" />
  </Form.Group> </Form>
  </Col>
  <Col md="3">
  <Form>
  <Form.Group className="mb-3"  >     
    <Form.Control type="text" placeholder="Search" className="form-control-search-groove" />
  </Form.Group> </Form>

  </Col>
</Row>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
<h3>File Uploader</h3>
<p>Drag and drop file uploaders are used to directly upload files by dragging and dropping them into a drop zone area. Alternatively, you can also traditionally open files through a file selection dialog by clicking the text link description inside the drop zone.</p>
<div className="fileupload-groove">
<Fileupload /> 
</div>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.FileUploader}
</pre>
</div>
     
        </Col>
      </Row>
    </div>
    </>

  );
}

export default InputFields;