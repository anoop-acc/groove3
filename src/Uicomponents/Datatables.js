import React, { useState } from "react";
import {  Row, Col, Table, Button } from "react-bootstrap"

import table1 from "./Images/Datatables/table1.png"
import table1hover from "./Images/Datatables/table1hover.png"
import tablevscroll from "./Images/Datatables/table-vscroll.png"
import tableHscroll from "./Images/Datatables/tableHscroll.png"
import tablevarients from "./Images/Datatables/tablevarients.png"
import strripedrows from "./Images/Datatables/strripedrows.png"
import borderless from "./Images/Datatables/borderless.png"
import tableborderlessXl from "./Images/Datatables/tableborderlessXl.png"
import regularSize from "./Images/Datatables/regularSize.png"
import compressed from "./Images/Datatables/compressed.png"

import TableDefault from "./Datatables/TableDefault"
import TableDefaultVScroll from "./Datatables/TableDefaultVScroll"
import TableDefaultHScroll from "./Datatables/TableDefaultHScroll"
import TableDefaultBroderLess from "./Datatables/TableDefaultBroderLess"

import { NavLink } from 'react-router-dom'


//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;


function Datatables(props) {

 


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
  
<p>Data tables are used to organize and display data efficiently. The data table component allows for customization with additional functionality, as needed by your product’s users.</p>
</Col>
 </Row>
 </div>
        <div class="bodyrhs-section-gray" style={{background:"#F9FAFB"}}>            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>      
            <h2  >Default and Recommended to Use </h2>
{/* <img src={table1}  className="w-100" /> */}
<TableDefault  />
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.TableBasic}
</pre>
</div>
<h2 className='my-4'>Hover and Select - Option 1 </h2>
<img src={table1hover} className="w-100" />
<h2 className='my-4'>Hover and Select - Option 2 </h2>
<img src={table1hover} className="w-100" />
        </Col>
        </Row>
        </div>

<div class="bodyrhs-section-plain">            
<Row className="container-fluid  mx-auto p-0"> 
<Col md="3" className=' p-0 lhs-emptyspace'></Col>
<Col lg="9" className='p-0 ps-lg-5 text-start'> 
<h2>Secondary Tables</h2>
<h3 className='my-4'>Scroll Usage</h3>
<p>Since using a horizontal or vertical scroll is not the best practice in the tables. We might use these exceptions in some specific scenarios avoiding usage both at the same time.</p>

<h3 className='my-4'>Vertical scroll</h3>
{/* <img src={tablevscroll} className="w-100" /> */}
<TableDefaultVScroll variant={"primary"} />
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
<h3 className='my-4'>Horizontal scroll</h3>
{/* <img src={tableHscroll} className="w-100" /> */}
<TableDefaultHScroll variant={"primary"} />
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
<h3 className='my-4'>Variants</h3>
<img src={tablevarients} className="w-100" />
<Row>
  <Col sm="6">
  <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
  </Col>
  <Col sm="6">
  <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
  </Col>
</Row>
<Row className='my-4'>
    <Col md="6"><h3>Stripped Rows</h3>
     {/* <img src={strripedrows} className="w-100" /> */}
     <div className='datatable-groove-wrapper'>
     <Table striped   hover size="sm" className='datatable-groove'>
  <thead>
    <tr>
      <th>#</th>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td  >Larry the Bird</td>
      <td>3</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
    </Col>
    <Col md="6"><h3>Borderless Tables</h3>
     {/* <img src={borderless} className="w-100" /> */}
     <TableDefaultBroderLess variant={"borderless"} />
     <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
    </Col>
</Row>
<h3 className='my-4'>Borderless Tables Variant</h3>
<img src={tableborderlessXl} className="w-100" />

<Table       size="" className='datatable-groove ' variant="splited-row">
  <thead>
    
    <tr>
      <th>#</th>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>

  </thead>
  <tbody>
  
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
     
    <tr>
      <td className='spacer' colSpan="4"></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td className='spacer' colSpan="4"></td>
    </tr>
    <tr>
      <td>3</td>
      <td  >Larry the Bird</td>
      <td>3</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
Code
</pre>
</div>
<Row className='my-4'>
    <Col md="6"><h3>Regular Size Table</h3>
     <img src={regularSize} className="w-100" />
    </Col>
    <Col md="6"><h3>Compressed Table</h3>
     <img src={borderless} className="w-100" />
    </Col>
</Row>



</Col>
 </Row>
 </div>
 </>
    );
}

export default Datatables;