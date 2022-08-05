import React from 'react';
import { ListGroup, Row, Col } from "react-bootstrap"
import circlearrowdown from "../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down.svg"
import circlearrowdownright from "../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down-right.svg"
import circlecheck from "../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg"



import { ReactComponent as Circlearrowdown} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down.svg';
import { ReactComponent as Circlearrowdownright} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down-right.svg';
import { ReactComponent as Circlecheck} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg';
import { ReactComponent as Circlearrowupright} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-up-right.svg';
import { ReactComponent as Trophystar} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/trophy-star.svg';
import { ReactComponent as Comments} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/comments.svg';
import { ReactComponent as Rocketlaunch} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/rocket-launch.svg';


import { ReactComponent as ExampleIcon} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg';
import { ReactComponent as Sackdollar} from '../../groovelibrary/FontAwesomeIconLibrary/regular/sack-dollar.svg';
import { ReactComponent as Users} from '../../groovelibrary/FontAwesomeIconLibrary/regular/users.svg';
import { ReactComponent as Presentationscreen} from '../../groovelibrary/FontAwesomeIconLibrary/regular/presentation-screen.svg';

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function ListItemVariations(props) {
    const { codedivActive } = props;
    return (
        <div>
            <h4>Line Separated List Items</h4>
            <p>
                The following examples show how the 2nd piece of a list Item can be leverage to different components, as long as they are based on the elements of the design system and maintain consistency across the application.
            </p>  <p>
                Have in mind that for content heavy lists the recomendation is to use a table instead.
            </p>
            <h4>Supported Visual on Top</h4>
            <p>This variation most Likely will be used on landing pages, as it is informative nly, it can be leveraged and contain additional information and even support actions.</p>
            <ListGroup className='list-groove list-groove-lined mb-4'>
                <ListGroup.Item className='header'>Active services</ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Sackdollar /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex pills-set'>
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span> <i className='icon' ><Circlearrowdown className='svgicon-red'/></i>  
                            </div>
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>                                
                               <i className='icon' >
                               <Circlearrowdownright className='svgicon-yellow' />                
                                   </i>
                            </div>
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>
                                <i className='icon' >
                                <Circlecheck className='svgicon-green' /></i>

                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Sackdollar /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex pills-set'>
                           
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>                                
                               <i className='icon' >
                               <Circlearrowdownright className='svgicon-yellow' />                
                                   </i>
                            </div>
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>
                                <i className='icon' >
                                <Circlecheck className='svgicon-green' /></i>

                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Users /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex pills-set'>
                            
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>
                                <i className='icon' >
                                <Circlecheck className='svgicon-green' /></i>

                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Presentationscreen /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex pills-set'>                          
                            <div className='list-in-pills'>
                                <span className='info'>
                                    4<small>At/above target</small>
                                </span>
                                <i className='icon' >
                                <Circlecheck className='svgicon-green' /></i>

                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.ListLineSeparated}
</pre>
</div>
            <ListGroup className='list-groove list-groove-lined mb-4'>
                <ListGroup.Item className='header '> SynOps Applied Now \ Active capabilities</ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowdown className='svgicon-red' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex  pills-set'>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'> <Circlearrowdownright className='svgicon-yellow' />   </span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex  pills-set'>
                            <span className='count zero'>
                                0<small>At or above target</small>
                            </span>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'> <Circlecheck className='svgicon-green' />   </span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex  pills-set'>
                            <span className='count zero'>
                               0<small>At or above target</small>
                            </span>
                            <span className='count zero'>
                                0<small>At or above target</small>
                            </span>
                            <span className='count'>
                                4<small>At or above target</small>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'> <Circlecheck className='svgicon-green' />   </span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay  |  <small>10 Outcomes</small> </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex  pills-set'>
                            <span className='count zero'>
                                0<small>At or above target</small>
                            </span>
                            <span className='count zero'>
                                0<small>At or above target</small>
                            </span>
                            <span className='count '>
                                4<small>At or above target</small>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.ListgroupLineSeparatedColumn}
</pre>
</div>
            <Row>
                <Col md="7">
                <ListGroup className='list-groove list-groove-lined mb-4 md'>
                <ListGroup.Item className='header '>SynOps Applied Now \ Active capabilities</ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowdown className='svgicon-red' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-danger"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowdownright className='svgicon-yellow' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-warning"></i>
                            <i class="fa-solid fa-circle text-warning"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowupright className='svgicon-green' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowupright className='svgicon-green' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.ListgroupLineSeparatedBasic}
</pre>
</div>
                </Col>
                <Col md="5">
                <ListGroup className='list-groove list-groove-lined sm  mb-4'>
                <ListGroup.Item className='header '> Critical business outcomes</ListGroup.Item>
                <ListGroup.Item className='header '> 
                <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>                            
                            <span className='list-title'><small>Finance & Accounting \ Procure to Pay</small>
                            <h6><Circlearrowdown className='svgicon-red' />-23 days payable outstanding </h6>
                            </span>
                        </div>
                      
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='header '> 
                <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>                            
                            <span className='list-title'><small>Finance & Accounting \ Record to Report</small>
                            <h6><Circlearrowdownright className='svgicon-yellow' />1.93 days to issue resolution </h6>
                            </span>
                        </div>
                      
                    </div>
                </ListGroup.Item>
                </ListGroup>
                <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.ListgroupSM}
</pre>
</div>
                </Col>
            </Row>

            <h4>Supported Visual on Top</h4>
            <p>This variation most Likely will be used on landing pages, as it is informative nly, it can be leveraged and contain additional information and even support actions.</p>
           <Row>
               <Col md="5">
               <ListGroup className='list-groove list-groove-icontop'>
            <ListGroup.Item>
                <Trophystar className='iconImg'/>               
                <h4>Client success stories</h4> <p>Quisque fermentum, metus sit amet pulvinar congue, magna enim pharetra ex, nec viverra massa vitae.</p>
            </ListGroup.Item>
            </ListGroup>
               </Col>
               <Col md="5">
               <ListGroup className='list-groove list-groove-icontop'> 
            <ListGroup.Item>
                <Rocketlaunch className='iconImg' />                
                <h4>What the analysts are saying</h4> <p>Sed sagittis nibh eu elit venenatis, ac vulputate felis condimentum. Nullam nulla mi futura.</p>
            </ListGroup.Item>
            </ListGroup>
               </Col>
           </Row>
           <Row>
               <Col md="5">
               <ListGroup className='list-groove list-groove-icontop'> 
            <ListGroup.Item>
            <Comments className='iconImg' /> 
                <h4>Bold moves</h4> <p>Phasellus nulla libero, volutpat id facilisis sed, pharetra eu turpis pulvinar urna a odio faucibus.</p>
            </ListGroup.Item>
             </ListGroup>
               </Col>
               
           </Row>
           <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.ListgroupTopSupportingIcon}
</pre>
</div>
           
           
           
           

        

         
        </div>
    );
}

export default ListItemVariations;