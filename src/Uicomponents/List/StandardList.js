import React from 'react';
import { ListGroup, Badge } from "react-bootstrap"

import { ReactComponent as Moneycheckdollarpen } from "../../groovelibrary/FontAwesomeIconLibrary/regular/money-check-dollar-pen.svg"
import { ReactComponent as Moneycheckdollarpenduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/money-check-dollar-pen.svg"
import { ReactComponent as Fileinvoicedollar } from "../../groovelibrary/FontAwesomeIconLibrary/regular/file-invoice-dollar.svg"
import { ReactComponent as Cartshopping } from "../../groovelibrary/FontAwesomeIconLibrary/regular/cart-shopping.svg"
import { ReactComponent as Cartshoppingduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/cart-shopping.svg"
import { ReactComponent as Users } from "../../groovelibrary/FontAwesomeIconLibrary/regular/users.svg"
import { ReactComponent as Usersduo } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/users.svg"
import { ReactComponent as Image } from "../../groovelibrary/FontAwesomeIconLibrary/solid/image.svg"
import { ReactComponent as Spinnerthird } from "../../groovelibrary/FontAwesomeIconLibrary/duotone/spinner-third.svg"
import { ReactComponent as Circlecheck } from "../../groovelibrary/FontAwesomeIconLibrary/solid/circle-check.svg"


//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;


function StandardList(props) {

  const { codedivActive } = props;

  return (
    <div>
      <h4 className='pt-3'>Label Only List Items</h4>
      <ListGroup className='list-groove'>
        <ListGroup.Item>30 Leli Plaza</ListGroup.Item>
        <ListGroup.Item>1195 Lowa Path</ListGroup.Item>
        <ListGroup.Item>1877 Afbe Pike</ListGroup.Item>
      </ListGroup>
<div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>{codeItem.listtype1}</pre>
</div>
      <h4 className='pt-4'>Supporting Visual + Label + Right Action List Items</h4>
      <ListGroup className='list-groove list-action-groove'>
        <ListGroup.Item><span><Image /> Darrell Scott</span> <i className="fa-solid fa-angle-right"></i> </ListGroup.Item>
        <ListGroup.Item><span><Image />Allen Lindsey</span> <i className="fa-solid fa-angle-right"></i>  </ListGroup.Item>
        <ListGroup.Item><span><Image /> Lilly Neal </span> <i className="fa-solid fa-angle-right"></i></ListGroup.Item>
      </ListGroup>
<div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>{codeItem.listtype2}</pre>
</div>
      <h4 className='pt-4'>Supporting Visual + Label + Description/Additional Information</h4>
      <ListGroup className='list-groove list-info-groove'>
        <ListGroup.Item><div className='Col'><span className='ico'><Fileinvoicedollar /></span>Payment Processing Assessment</div>
          <div className='Col rs'>
            <span className='info'><span className='ico'><i class="fa-solid fa-list"></i></span><small>8 questions</small></span>
            <span className='info'><span className='ico'><i className="fa-regular fa-clock"></i></span><small>10 min</small></span>
            <span className='info'><span className='ico'><Circlecheck className='svgicon-green' /></span><small>Complete</small></span>
          </div></ListGroup.Item>
      </ListGroup>

      <ListGroup className='list-groove list-info-groove'>
        <ListGroup.Item><div className='Col'><span className='ico'><Moneycheckdollarpen /> </span>Payment Processing Assessment</div>
          <div className='Col rs'>
            <span className='info'><span className='ico'><i class="fa-solid fa-list"></i></span><small>8 questions</small></span>
            <span className='info'><span className='ico'><i className="fa-regular fa-clock"></i></span><small>10 min</small></span>
            <span className='info'><span className='ico'><Spinnerthird className='svgicon-info' /></span><small>Complete</small></span>
          </div></ListGroup.Item>

      </ListGroup>
      <p className='pt-3'>It’s recomended to use 3 actions maximun, if you need to display more than 3 actions define the most important actions and have the rest within a ellipsis menu.
      </p>
<div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>{codeItem.listtype3}</pre>
</div>

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
      <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
      <pre>{codeItem.listtype4}</pre>
      </div>



      <h4 className='pt-4'>Label + Description/Additional Information</h4>

      <ListGroup className='list-groove list-description-card-groove'>
        <ListGroup.Item>Lorem Tech Reporting Increased Sales
          <p>To help meet the critical needs resulting from the global COVID-19 pandemic, Lorem Tech and…</p>
          <div className='list-description-footer'>
            <span className='ico'><img src="" /></span>Brooklyn, NY.
            <small>Last Updated: 04 Feb 2020</small>
          </div>
        </ListGroup.Item>
      </ListGroup>

      <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
      <pre>{codeItem.listtype5}</pre>
      </div>
    </div>
  );
}

export default StandardList;