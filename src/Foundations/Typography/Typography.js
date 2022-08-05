import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"

import primaryuse from "./images/primaryuse.png"
import secondoryuse from "./images/secondoryuse.png"
import limitedsystemuse from "./images/limitedsystemuse.png"
import status from "./images/status.png"

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function Typography(props) {

    //Get Code Toggle
    const [codedivActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!codedivActive)
    };


    return (
        <div className="typographypage">
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
                         <h1 className='pagetitle'>{props.title}</h1>
                        <p>Groove's typography system is designed to provide structure, readability, and draw attention to important messages... making the UI easy to scan.</p>
                        <h3>Type Style</h3>
                        <p>Our overall typographic approach is strong and bold. Whenever possible, we use short headlines of large sizes. Dark text on light backgrounds is our default, but we add variety, interest, and emphasis by selectively and deliberately using color with text. Clarity and legibility inform all type choices.</p>
                        <h3>Graphik</h3>
                        <p>Our primary typeface is Graphik, chosen for the way it expresses our messages with boldness, clarity, and personality. It works well at large sizes as a central design element and at smaller sizes for clean copy and UI elements.</p>
                        <h3>Language Support</h3>
                        <p>Graphik supports English, Spanish, French, Italian, German, Portuguese, Polish, and Russian.</p>
                        <h3>Alternate Typeface</h3>
                        <p>Our alternate typeface is Arial, for use when Graphik is not available.</p>
                        <h3>Source Han Sans</h3>
                        <p>Source Han Sans is an open-source font that supports Japanese and Simplified Chinese.</p>
                        <p>Source Han Sans can be downloaded here: <a target="new" href='https://github.com/adobe-fonts/source-han-sans' >https://github.com/adobe-fonts/source-han-sans </a></p>
                        <h2>Primary Use</h2>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-gray   ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <img src={primaryuse} className="w-100" style={{ maxWidth: "980px" }} />
                        {/* <Row>
                <Col md="4">x</Col>
                <Col md="8">x</Col>
            </Row> */}
                    </Col>
                </Row>
            </div>

            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                <code>
{codeItem.typographyHeadins1}
</code>
                            </pre>
                            <table className='codetable border mt-3'>
                                <tr>
                                    <td className="p-2 border w-25">Default Headings <br/> Font Family : Graphic Medium </td>
                                    <td className="p-2 border ">tags: </td>
                                    <td className="p-2 border "> h1, h2, h3, h4, h5, h6</td>
                                    <td className="p-2 border ">Tags: h1 to h6  </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border w-25">Bold Headings <br/>Font Family : Graphic Semi Bold</td>
                                    <td className="p-2 border ">Classes: </td>
                                    <td className="p-2 border ">.h1, .h2, .h3, .h4, .h5, .h6</td>
                                    <td className="p-2 border ">Classes Can use with heading tags h1 to h6  </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border w-25">Regular Headings <br/>Font Family : Graphic Regular</td>
                                    <td className="p-2 border ">Class:</td>
                                    <td className="p-2 border"> .regular  </td>
                                    <td className="p-2 border ">'.regular' Class Can use with heading tags h1 to h6  </td>
                                </tr>

                            </table>
                        </div>

                    </Col>
                </Row>
            </div>



            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>

                        <h2 className='my-3'>Secondary Use</h2>
                        <img src={secondoryuse} className="w-100" style={{ maxWidth: "980px" }} />

                        <div className='bodyrhs-section pt-4'>
                            <h2 className='my-3'>Limited for System Use</h2>
                            <img src={limitedsystemuse} className="w-100" style={{ maxWidth: "792px" }} />
                        </div>
                        <div className='bodyrhs-section pt-4'>
                            <h2 className='my-3'>Text and RAG Colors</h2>
                            <img src={status} className="w-100" style={{ maxWidth: "652px" }} />
                            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}> 
<pre>
    {codeItem.textcolors}
</pre>
</div>

                        </div>

                        <div className='bodyrhs-section pt-4'>
                            <h2>Hero</h2>
                            <p>Best used on landing pages, Hero text is used to drive impact. When you need to say something big and bold, use the Hero style. Offered in 5 sizes, 2 weights, and 4 colors.</p>
                            <h3>Bigger size</h3>

                            <h1 class="display-1-xl">Midnight Super 80pts</h1>
                            <h1 class="display-2-xl">Midnight Super 80pts</h1>
                            <h1 class="display-3-xl">Midnight Super 80pts</h1>
                            <h1 class="display-4-xl">Midnight Super 80pts</h1>
                            <h3>Smaller size</h3>

                            <h1 class="display-1-sm">Midnight Super 32pts</h1>
                            <h1 class="display-2-sm">Midnight Super 32pts</h1>
                            <h1 class="display-3-sm">Midnight Super 32pts</h1>
                            <h1 class="display-4-sm">Midnight Super 32pts</h1>
                            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                            <pre>
                                <code>{codeItem.typographyHero}
                                    </code></pre>
                                    <table className='codetable border mt-3'>
                                <tr>
                                    <td className="p-2 border w-25">Bigger Size Heading</td>
                                    <td className="p-2 border w-25">Classes: </td>
                                    <td className="p-2 border w-25">display-1-xl, display-2-xl, display-3-xl, display-4-xl </td>
                                    </tr>
                                <tr>
                                    <td className="p-2 border w-25">Smaller  Size Heading</td>
                                    <td className="p-2 border w-25">Classes: </td>
                                    <td className="p-2 border w-25">display-1-sm, display-2-sm, display-3-sm, display-4-sm </td>
                                    </tr>
                                    </table>
                                    </div>



                        </div>
                        <div className='bodyrhs-section pt-4 typography-header'>
                            <h2>Headers</h2>
                            <p>Headers are used at the top of text blocks describing the content below the header line. </p>

                            <h3>Bigger size</h3>

                            <h1 className='heading'  >Midnight Semibold 28pts</h1>
                            <h3 className='heading'>Smaller size</h3>
                            <h5 className='heading'>Midnight Semibold 14pts</h5>
                        </div>
                        <div className='bodyrhs-section pt-4 typography-body'>
                            <h2>Body Text</h2>
                            <p>Body text is used for multiple lines of copy in paragraph form. The vertical line spacing of Groove's body text is adequately spaced providing for easy readability. </p>
                            <h3>Bigger size</h3>
                            <h1>Midnight Medium 24pts</h1>
                            <h1 className='regular'>Midnight Medium 24pts</h1>
                            <h3>Smaller size</h3>
                            <h6>Midnight Medium 12pts</h6>
                            <h6 className='regular'>Midnight Medium 12pts</h6>
                        </div>


                    </Col>
                </Row>
            </div>















        </div>
    );
}

export default Typography;