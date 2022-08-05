import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

 

//Import Component Sample Code
import { CodeData } from "../CodeData";
const [codeItem] = CodeData;

function Buttons(props) {

  //Get Code Toggle
  const [codedivActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!codedivActive)
  };

 

  return (
    <div >
      <div class="bodyrhs-section-gray mb-0 pb-0  ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-5 text-start '>
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
       
            <p>Primary buttons should be used sparingly on each screen, form, or modal window in order to direct the user's attention to the most important action on screen. </p>
            <Row>
              <Col xl="6">
                <h2>Standard Buttons</h2>
                <h3>Primary</h3>
                <Row>
                  <Col sm="4">
                    <h4>Default</h4>
                    <Button className='btn-groove' size="lg" variant="dark">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Outline</h4>
                    <Button className='btn-groove' size="lg" variant="outline-dark">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Hover</h4>
                    <Button className='btn-groove active' size="lg" variant="dark">Button label</Button>
                  </Col>
                </Row>
              </Col>
              <Col xl="6">
                <h2 className="mt-lg-hd-3">Accent Buttons</h2>
                <h3>Impact & Emphasis</h3>
                <Row>
                  <Col sm="4">
                    <h4>Default</h4>
                    <Button className='btn-groove' size="lg" variant="primary" >Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Outline</h4>
                    <Button className='btn-groove' size="lg" variant="outline-primary">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Hover</h4>
                    <Button className='btn-groove active' size="lg" variant="outline-primary">Button label</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xl="6">

                <h3 className='mt-4'>Secondary</h3>
                <Row >
                  <Col sm="4">
                    <h4>Default</h4>
                    <Button className='btn-groove' size="lg" variant="secondary">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Outline</h4>
                    <Button className='btn-groove' size="lg" variant="outline-secondary">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Hover</h4>
                    <Button className='btn-groove active' size="lg" variant="dark">Button label</Button>
                  </Col>
                </Row>
              </Col>
              <Col xl="6">
                <h3 className='mt-4'>Impact & Emphasis</h3>
                <Row>
                  <Col sm="4">
                    <h4>Default</h4>
                    <Button className='btn-groove' size="lg" variant="blue" >Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Outline</h4>
                    <Button className='btn-groove' size="lg" variant="outline-blue">Button label</Button>
                  </Col>
                  <Col sm="4">
                    <h4>Hover</h4>
                    <Button className='btn-groove active' size="lg" variant="outline-blue">Button label</Button>
                  </Col>
                </Row>


              </Col>


            </Row>
            <Row>
              <Col lg="8">  <h3 className='mt-4'>Dark Mode Buttons</h3>
                <div className="darkmodebuttonset  ">
                  <Button className='btn-groove' variant="light">Button label</Button>
                  <Button className='btn-groove' variant="outline-light">Button label</Button>
                  <Button className='btn-groove active' variant="outline-light">Button label</Button>
                </div>

              </Col>
            </Row> 
            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
              <p className="cmt">//Button Filled</p>
              <pre >{codeItem.buttonsfilled}  </pre>
              <p className="cmt">//Button Outlined</p>             
              <pre >{codeItem.buttonoutline}</pre>
              <table className='codetable border mt-3 '>
                <tr>
                  <td className='p-2 border w-25'>Custom Class </td>
                  <td className='p-2 border'>btn-groove</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Size</td>
                  <td className='p-2 border'>sm, lg</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Colors</td>
                  <td className='p-2 border'>primary, blue, dark, secondary, success,   warning ,  danger  ,  info ,  light , outline-primary ,  outline-blue ,  outline-dark ,  outline-secondary ,  outline-light ,  outline-success ,  outline-warning ,  outline-danger ,  outline-info </td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>

      </div>

      <div class="bodyrhs-section-gray mb-0 pb-0  ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-5 text-start '>
            <h3>Icon & Text buttons</h3>
            <Row className='pt-3'>
              <Col md="4 btnSet"> <h5>Default</h5>
                {/* <Button className='btn-groove' variant="primary" size=""><span className='ico-ls'><img src={iconbadge} /></span>Primary</Button>  */}
                <Button className='btn-groove' size="lg" variant="primary"  ><span className='ico-ls'><i class="fa-solid fa-compass-drafting"></i></span>Button label</Button>

              </Col>
              <Col md="4 btnSet  "><h5 className="mt-md-hd-3">Outline</h5>
                <Button className='btn-groove' size="lg" variant="outline-primary"><span className='ico-ls'><i class="fa-solid fa-compass-drafting"></i></span>Button label</Button>
              </Col>
              <Col md="4 btnSet ">
                <h5 className="mt-md-hd-3">Hover</h5>
                <Button className='btn-groove active' size="lg" variant="primary"  ><span className='ico-ls'><i class="fa-solid fa-compass-drafting"></i></span>Button label</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div class="bodyrhs-section-gray mb-4 ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-5 text-start '>
            <h3>Go buttons</h3>
            <Row className='pt-3'>
              <Col md="4 btnSet"> <h5>Default</h5>
                <Button className='btn-groove' variant="primary" size="lg">Button label <span className='ico-rs'><i class="fa-solid fa-arrow-right-long"></i></span></Button>

              </Col>
              <Col md="4 btnSet"> <h5 className="mt-md-hd-3">Outline</h5>
                <Button className='btn-groove' variant="outline-primary" size="lg">Button label <span className='ico-rs'><i class="fa-solid fa-arrow-right-long"></i></span></Button>
              </Col>

              <Col md="4 btnSet">
                <h5 className="mt-md-hd-3">Hover</h5>
                <Button className='btn-groove hover' variant="primary" size="lg">Button label <span className='ico-rs'><i class="fa-solid fa-arrow-right-long"></i></span></Button>

              </Col>
            </Row>
            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
              <p class="cmt ">//Default Buttons with Icon on Left side</p>
              <pre >{codeItem.buttonwithicon1}</pre>
              <p class="cmt">//Icon on Right side</p>
              <pre>{codeItem.buttonwithicon2}</pre>
              <table className='codetable border mt-3' >
                <tr>
                  <td className='p-2 border w-25'>Custom Class </td>
                  <td className='p-2 border'>btn-groove</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Size</td>
                  <td className='p-2 border'>sm, lg</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Colors</td>
                  <td className='p-2 border'>primary, blue, dark, secondary, success,   warning ,  danger  ,  info ,  light , outline-primary ,  outline-blue ,  outline-dark ,  outline-secondary ,  outline-light ,  outline-success ,  outline-warning ,  outline-danger ,  outline-info </td>
                </tr>
              </table>

            </div>

          </Col>
        </Row>
      </div>

      <div class="bodyrhs-section-plain">
        <Row className="container-fluid  mx-auto p-0">
          <Col md="3" className=' p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-5 text-start'>
            <h2>Utility buttons</h2>
            <p>Buttons greatly affect user satisfaction, engagement, and user experience as they consist of secondary actions and tools, such as contact, subscribe, save, login, share, etc.</p>
            <Row className='pt-3'>
              <Col xl="6">
                <h3>Text buttons</h3>
                <Row className=''>
                  <Col sm="6 btnSet"><h5>Default</h5>
                    <Button className='btn btn-utility btn-groove ' size="sm" variant=""  >Button label</Button>
                  </Col>
                  <Col sm="6 btnSet mt-xsm-3"><h5>Outline</h5>
                    <Button className='btn btn-utility btn-groove ' size="sm" variant="ouline"  >Button label</Button>
                  </Col>

                </Row>
              </Col>
              <Col xl="6">
                <h3 className="mt-lg-hd-3">Loading button</h3>
                <Row className=''>
                  <Col md="6 btnSet"><h5>Default</h5>
                    <Button className=' btn-utility btn-groove ' size="sm" variant="ouline"  ><span className='ico-ls'><i class="fa-solid fa-spinner rotate"></i></span> </Button>
                  </Col>
                  <Col md="6 btnSet mt-xsm-3"> </Col>
                </Row>
              </Col>
            </Row>


            <Row className='pt-3'>
              <Col sm="6">
                <h3>Icon & Text buttons</h3>
                <Row className=''>
                  <Col md="6 btnSet"><h5>Default</h5>
                    <Button className='btn-utility btn-groove ' size="sm" variant=""  ><span className='ico-ls'><i class="fa-solid fa-compass-drafting"></i></span> Button label</Button>
                  </Col>
                  <Col md="6 btnSet mt-xsm-3"><h5>Outline</h5>
                    <Button className='btn-utility btn-groove ' size="sm" variant="ouline"  ><span className='ico-ls'> <i class="fa-solid fa-compass-drafting"></i></span>Button label</Button>
                  </Col>

                </Row>
              </Col>
              <Col sm="6">
                <h3 className="mt-xsm-3">Back buttons</h3>
                <Row className=''>
                  <Col md="6 btnSet"><h5>Default</h5>
                    <Button className='btn btn-utility btn-groove ' size="sm" variant=""  ><span className='ico-ls'><i class="fa-solid fa-angle-left  icon-ls"></i></span> Back</Button>
                  </Col>
                  <Col md="6 btnSet mt-xsm-3"><h5>Outline</h5>
                    <Button className='btn btn-utility btn-groove ' size="sm" variant="ouline"  ><span className='ico-ls'><i class="fa-solid fa-angle-left  icon-ls"></i></span> Back</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className='pt-3'>
              <Col sm="6">
                <h3>Icon button</h3>
                <Row className=''>
                  <Col sm="6 btnSet"><h5>Default</h5>
                    <Button className='btn-groove ' variant='icon'  ><i class="fa-solid fa-compass-drafting"></i>  </Button>
                  </Col>
                  <Col sm="6 btnSet" className="mt-xsm-3"><h5>Outline</h5>
                    <Button className='btn-groove ' variant='icon' > <i class="fa-solid fa-compass-drafting"></i> </Button>
                  </Col>

                </Row>
              </Col>
              <Col sm="6">
                <h3 className="mt-xsm-3">Next buttons</h3>
                <Row className=''>
                  <Col sm="6 btnSet"><h5>Default</h5>
                    <Button className='  btn-utility btn-groove ' size="sm"    >Next <i class="fa-solid fa-angle-right icon-rs"></i> </Button>
                  </Col>
                  <Col sm="6 btnSet" className="mt-xsm-3"><h5>Outline</h5>
                    <Button className=' btn-utility btn-groove ' size="sm" variant="ouline"  >Next <i class="fa-solid fa-angle-right  icon-rs"></i>  </Button>
                  </Col>
                </Row>
              </Col>
            </Row>



            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
              <p class="cmt ">//Default Buttons with Icon on Right side</p>
              <pre>{codeItem.buttonutility1}</pre>
              <p class="cmt ">//Icon on Right side</p>
              <pre>{codeItem.buttonutility2}</pre>
              <p class="cmt ">//Icon Button &lt;i&gt; Can be replace with images or svg</p>
              <pre>{codeItem.buttonicononly}</pre>
              <table className='codetable border w-100 mt-3'>
                <tr>
                  <td className='p-2 border w-25'>Custom Class </td>
                  <td className='p-2 border'>btn-utility, btn-groove</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Size</td>
                  <td className='p-2 border'>sm, lg</td>
                </tr>
                <tr>
                  <td className='p-2 border w-25'>Colors</td>
                  <td className='p-2 border'>NA</td>
                </tr>
              </table>

            </div>

          </Col>
        </Row>
      </div>

    </div>
  );
}

export default Buttons;


