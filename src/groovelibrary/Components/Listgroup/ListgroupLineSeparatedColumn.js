import React from 'react';
import { ListGroup } from "react-bootstrap"

// Icons 
import { ReactComponent as Circlearrowdown} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down.svg';
import { ReactComponent as Circlearrowdownright} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down-right.svg';
import { ReactComponent as Circlecheck} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg';


function ListgroupLineSeparatedColumn(props) {
    return (
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
    );
}

export default ListgroupLineSeparatedColumn;