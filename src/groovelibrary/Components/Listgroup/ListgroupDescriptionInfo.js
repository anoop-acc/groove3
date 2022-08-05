import React from 'react';
import { ListGroup } from "react-bootstrap"

//Icons
import { ReactComponent as Moneycheckdollarpenduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/money-check-dollar-pen.svg"
import { ReactComponent as Cartshoppingduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/cart-shopping.svg"
import { ReactComponent as Usersduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/users.svg"
 

function ListgroupDescriptionInfo(props) {
    return (
        <ListGroup className='list-groove list-description-info-groove'>
        <ListGroup.Item>
          <div className='Col-ls'><span className='ico'><Moneycheckdollarpenduo className='svgicon-blue' /></span>
            <span className='data'>China Headcount
              <p>As on March - BP Vs Act , Total variance -355, Count - Selling -78 & Marketing -40</p>
              <div className='list-info-footer'><small>Date: Apr 30 2020</small> <Badge className='badge-groove' bg="coral"  >Q2</Badge>
                <Badge className='badge-groove' bg="teal"  >Sea</Badge></div></span>
          </div>
          <div className='Col-rs'>
            <span className='ico-actions'><i className="fa-regular fa-bookmark"></i></span>
            <span className='ico-actions'><i className="fa-regular fa-heart"></i></span>
            <span className='ico-actions'><i className="fa-solid fa-ellipsis-vertical"></i></span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='Col-ls'><span className='ico'><Cartshoppingduo className='svgicon-blue' /></span>
            <span className='data'>China Headcount
              <p>As on March - BP Vs Act , Total variance -355, Count - Selling -78 & Marketing -40</p>
              <div className='list-info-footer'><small>Date: Apr 30 2020</small> <Badge className='badge-groove' bg="coral"  >Q2</Badge>
                <Badge className='badge-groove' bg="teal"  >Sea</Badge></div></span>
          </div>
          <div className='Col-rs'>
            <span className='ico-actions'><i className="fa-regular fa-bookmark"></i></span>
            <span className='ico-actions'><i className="fa-regular fa-heart"></i></span>
            <span className='ico-actions'><i className="fa-solid fa-ellipsis-vertical"></i></span>

          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='Col-ls'><span className='ico'><Usersduo className='svgicon-blue' /></span>
            <span className='data'>China Headcount
              <p>As on March - BP Vs Act , Total variance -355, Count - Selling -78 & Marketing -40</p>
              <div className='list-info-footer'><small>Date: Apr 30 2020</small> <Badge className='badge-groove' bg="coral"  >Q2</Badge>
                <Badge className='badge-groove' bg="teal"  >Sea</Badge></div></span>
          </div>
          <div className='Col-rs'>
            <span className='ico-actions'><i className="fa-regular fa-bookmark"></i></span>
            <span className='ico-actions'><i className="fa-regular fa-heart"></i></span>
            <span className='ico-actions'><i className="fa-solid fa-ellipsis-vertical"></i></span>

          </div>
        </ListGroup.Item>
      </ListGroup>
    );
}

export default ListgroupDescriptionInfo;