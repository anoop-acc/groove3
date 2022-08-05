// import React from 'react';
// import oilogo from "./images/oilogo.svg"

// function Footer(props) {
//     return (
//         <footer className='footer-inner'> 
//             <a className='backtotop' href='#'>Back to Top </a>
//              <img  src={oilogo} alt="" />
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import subbrandlogo from "./groovelibrary/Components/Footers/images/SynOps.svg"
import footermainlogo from "./groovelibrary/Components/Footers/images/acc-logo.png"
import footermainlogodarkmode from "./groovelibrary/Components/Footers/images/acc_logo_white.svg"
import {ReactComponent as Backtotoparrow} from "./groovelibrary/FontAwesomeIconLibrary/regular/circle-arrow-up.svg"
 


function Footer(props) {
    return (
        <footer className={`footer-groove footer-inner ${props.variant}`}>
             <a className='backtotop' href='#'>Back to Top <Backtotoparrow  className='svgicon-blue'/></a>
            <span className='footer-logo lightmode'><img src={footermainlogo} /></span>
            <span className='footer-logo darkmode'><img src={footermainlogodarkmode} /></span>
            <span className='copytight'>© 2022 Accenture. All Rights Reserved.</span>
            <span className='footer-links d-none'>
                <a>Terms of Use</a>
                <a>Privacy Statement</a>
                <a>Contact Support</a>              
            </span>
            <span className='footer-sub-brand'><img src={subbrandlogo} /><span className='sub-brand-name'>SynOps <i></i><small>from Accenture Operations</small></span></span>
        </footer>
    );
}

export default Footer;