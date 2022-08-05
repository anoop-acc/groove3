import React from 'react';
import { ListGroup } from "react-bootstrap"

//Icons
import { ReactComponent as Trophystar} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/trophy-star.svg';
import { ReactComponent as Comments} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/comments.svg';
import { ReactComponent as Rocketlaunch} from '../../groovelibrary/FontAwesomeIconLibrary/duotone/rocket-launch.svg';
 

function ListgroupTopSupportingIcon(props) {
    return (
        <ListGroup className='list-groove list-groove-icontop'>
            <ListGroup.Item>
                <Trophystar className='iconImg' />
                <h4>Client success stories</h4> <p>Quisque fermentum, metus sit amet pulvinar congue, magna enim pharetra ex, nec viverra massa vitae.</p>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ListgroupTopSupportingIcon;