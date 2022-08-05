// Critical business outcomes Listgroup
import React from 'react';
import { ListGroup } from "react-bootstrap"

//Icons
import { ReactComponent as Circlearrowdown} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down.svg';
import { ReactComponent as Circlearrowdownright} from '../../groovelibrary/FontAwesomeIconLibrary/solid/circle-arrow-down-right.svg';
 
function ListgroupSM(props) {
    return (
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
    );
}

export default ListgroupSM;