import React from 'react';
import subbrandlogo from "./images/SynOps.svg"
import footermainlogo from "./images/acc-logo.png"
import footermainlogodarkmode from "./images/acc_logo_white.svg"

function FooterLight(props) {
    return (
        <footer className={`footer-groove ${props.variant}`}>
            <span className='footer-logo lightmode'><img src={footermainlogo} /></span>
            <span className='footer-logo darkmode'><img src={footermainlogodarkmode} /></span>
            <span className='copytight'>© 2022 Accenture. All Rights Reserved.</span>
            <span className='footer-links'>
                <a>Terms of Use</a>
                <a>Privacy Statement</a>
                <a>Contact Support</a>              
            </span>
            <span className='footer-sub-brand'><img src={subbrandlogo} /><span className='sub-brand-name'>SynOps <i></i><small>from Accenture Operations</small></span></span>
        </footer>
    );
}

export default FooterLight;