import React from 'react';
import { Row, Col, Breadcrumb} from "react-bootstrap"


function Breadcrumbs(props) {

const codeComment = `//Custom Class - className='breadcrumb-groove'`
const breadcrumb = `<Breadcrumb className='breadcrumb-groove'>
<Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
<Breadcrumb.Item href="#">Breadcrumb 2</Breadcrumb.Item>
<Breadcrumb.Item active>Breadcrumb 3</Breadcrumb.Item>
</Breadcrumb>`
const breadcrumbcolor = `//Color Variants
className='breadcrumb-groove  primary'
className='breadcrumb-groove  secondary'
className='breadcrumb-groove  secondarydark'
`

    return (

      <div class="bodyrhs-section-plain">            
      <Row className="container-fluid  mx-auto p-0"> 
      <Col md="3" className=' p-0 lhs-emptyspace'></Col>
      <Col lg="9" className='p-0 ps-lg-5 text-start'>
       <h1 className='pagetitle'>{props.title}</h1>  
             <p>A breadcrumb is a type of contextual navigation that shows a user’s position within the hierarchy of a site and allows them to navigate back through the site’s levels.</p>
             <Row>
                 <Col sm="6 pe-5">
                     <h2>Color</h2>
                     <h5 className='d-flex  mr-5'><span>Default</span> <span className='d-inline-block ml-5'>Active</span></h5>
                     <Breadcrumb className='breadcrumb-groove  '>
  <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  Breadcrumb 2
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb 3</Breadcrumb.Item>
</Breadcrumb>

<Breadcrumb className='breadcrumb-groove primary'>
  <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  Breadcrumb 2
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb 3</Breadcrumb.Item>
</Breadcrumb>


                 </Col>
                 <Col sm="6">
                 <h2>Gray Scale</h2>
                 <h5 className='d-flex '><span>Default</span> <span className='d-inline-block ml-5'>Active</span></h5>
                 <Breadcrumb className='breadcrumb-groove secondarydark'>
  <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  Breadcrumb 2
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb 3</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className='breadcrumb-groove secondary'>
  <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  Breadcrumb 2
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Breadcrumb 3</Breadcrumb.Item>
</Breadcrumb>

                 </Col>
             </Row>
             <h5 class="mt-3">Code </h5>
             <pre class="codeview mt-3">
    <code className='cmt'>{codeComment} </code>
    <code>
    {breadcrumb}
</code>
</pre>
<pre class="codeview mt-3">
    <code className='cmt'>{breadcrumbcolor} </code>    
</pre>
      </Col>
      </Row>
      </div>


 
    );
}

export default Breadcrumbs;