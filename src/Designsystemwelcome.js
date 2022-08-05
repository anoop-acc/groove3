import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Assets/css/coreui.scss"
import oilogo from "./images/oilogo.png"
import arrowrightlong from "./images/arrow-right-long.svg"

import { ReactComponent as Oilogo} from './images/oilogo.svg';

function Designsystemwelcome(props) {
  return (
    <div className='welcomepage'>
      <div className='welcomepagebanner'>
        <div className='oi-logo'>
          <img src={oilogo} alt="" />
          {/* <Oilogo style={{fill:"#ffffff"}} /> */}
                  </div>
                  <h1>Core UI <small>for Groove 3.0</small></h1>
                  <p> This core guide was created for React, if you need to use any specific element for any other technology, please refer to its technology guide.</p>
      
      
      <NavLink className="btn   btn-groove-start" to="/LibraryLanding">Start <img src={arrowrightlong}/></NavLink>
      </div>
      <footer>
     <span className='oilogoimg'> <img  src={oilogo} alt="" /></span>
      </footer>


   
       
    </div>
  );
}

export default Designsystemwelcome;