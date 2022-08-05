import React from 'react';
import { ListGroup } from "react-bootstrap"

// Icons 
import { ReactComponent as Circlearrowdown} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down.svg';
import { ReactComponent as Circlearrowdownright} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down-right.svg';
import { ReactComponent as Circlecheck} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg';
import { ReactComponent as Sackdollar} from '../../groovelibrary/FontAwesomeIconLibrary/regular/sack-dollar.svg';
import { ReactComponent as Users} from '../../groovelibrary/FontAwesomeIconLibrary/regular/users.svg';
import { ReactComponent as Presentationscreen} from '../../groovelibrary/FontAwesomeIconLibrary/regular/presentation-screen.svg';


function ListGroupLine(props) {
    return (
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
    );
}

export default ListGroupLine;