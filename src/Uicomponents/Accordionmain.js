import React from 'react';
import {Button, Row, Col, Accordion} from "react-bootstrap"
function Accordionmain(props) {

const codeComment = `//Custom Class - className='accordion-groove'`
const AccordionCode =`<Accordion defaultActiveKey="0" className='accordion-groove'>
<Accordion.Item eventKey="0">
<Accordion.Header>Accordion Item #1</Accordion.Header>
<Accordion.Body>Accordion Content    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>Accordion Item #2</Accordion.Header>
<Accordion.Body>Accordion Content    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
<Accordion.Header>Accordion Item #3</Accordion.Header>
<Accordion.Body>Accordion Content    </Accordion.Body>
</Accordion.Item>
</Accordion> `


    return (

      <div class="bodyrhs-section-plain">            
      <Row className="container-fluid  mx-auto p-0"> 
      <Col md="3" className=' p-0 lhs-emptyspace'></Col>
      <Col lg="9" className='p-0 ps-lg-5 text-start'>
       <h1 className='pagetitle'>{props.title}</h1>  
          <p>An accordion is a vertically stacked list of headers that reveal or hide associated sections of content. </p>
          <Accordion defaultActiveKey="0" className='accordion-groove'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Overview</Accordion.Header>
    <Accordion.Body>
    The accordion component delivers large amounts of content in a small space through progressive disclosure. 
The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Content</Accordion.Header>
    <Accordion.Body>
    The accordion component delivers large amounts of content in a small space through progressive disclosure. 
The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Behaviors</Accordion.Header>
    <Accordion.Body>
    The accordion component delivers large amounts of content in a small space through progressive disclosure. 
The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  

<h5 className='mt-4'>Code </h5>
   <pre className='codeview'>
     <code className='cmt'>{codeComment}</code>
     <code>{AccordionCode}</code>
     </pre>
      </Col>
      </Row>
      </div>


      
    );
}

export default Accordionmain;