import React from 'react';
import {Row, Col} from "react-bootstrap"

import Headerlogolink from "./images/bestpractice/headerlogolink.png"
import reachtoanypageguide from "./images/bestpractice/reachtoanypageguide.png"
import breadcrumbsnav from "./images/bestpractice/breadcrumbsnav.png"

function Bestpratices(props) {
    return (


        <div class="bodyrhs-section-plain">            
        <Row className="container-fluid  mx-auto p-0"> 
        <Col md="3" className=' p-0 lhs-emptyspace'></Col>
        <Col lg="9" className='p-0 ps-lg-5 text-start'>
        <h1 className='pagetitle'>Best Practices</h1>  
           <p>It is always important to remember the best practices to provide a better readability and quality deliverable.</p>
           <h2>1. Link the logo back to the Home</h2>
<img style={{width:"100%"}} src={Headerlogolink}/>
           <p className="mt-3">Not linking your logo back to the homepage is a common user experience mistake that can be easily avoided. Your menu does not need to include the word “Homepage” in it. </p>
           <p>Instead, add your business’s logo or an icon at the top of your header and link it to the homepage. this will be highly intuitive for most of your users, as it sticks to navigation design conventions</p>
        <h2>2. Ensure visitors can reach any page from any page</h2>
         <img style={{width:"100%"}} src={reachtoanypageguide}/>
        <p className="mt-3">Visitors should be able to navigate to any page they desire, from any other page. This means that users should be able to access any page they land on should connect to the rest of your screens. An easy solution is simply to ensure that all pages are accessible from the Navigation. And if every page includes a Navigation —Well, you’re sorted.</p>
     
        <h2>3. Do use breadcrumbs navigation trails</h2>
        <img style={{width:"100%"}} src={breadcrumbsnav}/>
        <p className="mt-3">There is no greater navigation tool than Breadcrumb trails. We might have to use this approach to show the hierarchical navigation links that appear on a specific page. Which helps users to previous content without resorting to the “back” button.</p>
      
        </Col>
        </Row>
        </div>
 
    );
}

export default Bestpratices;