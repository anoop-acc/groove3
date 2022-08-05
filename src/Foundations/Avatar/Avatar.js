import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import { Row, Col, Card } from "react-bootstrap"
import avatarsizes from "./images/avatar-sizes.png"
import { ReactComponent as Avatarcircleuser } from "../../groovelibrary/FontAwesomeIconLibrary/solid/circle-user.svg"
import profileoverlay1 from "./images/profileoverlay1.png"
import profileoverlay2 from "./images/profileoverlay2.png"
import profileoverlay3 from "./images/profileoverlay3.png"
import useravatars from "./images/useravatars.png"

import {ReactComponent as Avatarimage} from "../../groovelibrary/images/image.svg"

import AvatarIcon from "../../groovelibrary/Components/Avatar/Avatar"
import AvatarButton from "../../groovelibrary/Components/Avatar/AvatarButton"
import AvatarInitials from "../../groovelibrary/Components/Avatar/AvatarInitials"
import AvatarInitialsGroup from "../../groovelibrary/Components/Avatar/AvatarInitialsGroup"
import AvatarButtonGroup from "../../groovelibrary/Components/Avatar/AvatarButtonGroup"
import AvatarUserProfile from "../../groovelibrary/Components/Avatar/AvatarUserProfile"


 

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function Avatar(props) {


//Get Code Toggle
const [codedivActive, setActive] = useState("false");
const handleToggle = () => {
setActive(!codedivActive)
};




    return (
        <>
      <div class="bodyrhs-section-gray mb-0 pb-0  ">
        <Row className="  container-fluid">
          <Col md="3" className='p-0 lhs-emptyspace'></Col>
          <Col lg="9" className='p-0 ps-lg-5 text-start '>
          <h1 className='mb-3 pagetitle'>{props.title}          <div>        
              <span className='ms-auto mt-4  d-flex'>
                <NavLink className="transparent me-3  " to="/CoreuigrooveLanding/UiComponents"> <button className='btn-pagesub active'  variant="outline-dark" size="sm">Overview</button></NavLink>
                <NavLink className="transparent me-3 " to=""  > <button className={`btn-pagesub ${codedivActive ? "" : "active"}`} variant="outline-dark" size="sm" onClick={handleToggle}>{codedivActive ? "Get Code" : "Hide Code"}</button></NavLink>
                <NavLink className="transparent " to=""> <button className='btn-pagesub' variant="outline-dark" size="sm">Accessibility</button></NavLink>
              </span>
              </div>
            </h1>
		  </Col>
		  </Row>
</div>



            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                       
                        <p>Avatars are used to identify a person, client, or product.</p>
                        <h2>Image Avatars</h2>
                        <p>Image avatars are typically used to visually identify users and companies. When possible, use image avatars over the initials style. When used in the top banner, avatars should be placed far right using the 40px size.</p>
                        <img src={avatarsizes} className='mb-3 w-100'  style={{maxWidth: "900px"}}/>
                        {/* <AvatarIcon size="sz-120"/> */}
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.AvatarIcon}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Size</td>
<td className="p-2 border ">sz-120, sz-80, sz-64, sz-48, sz-40, sz-32, sz-24, sz-20
</td>
</tr> 
</table>
</div>
                        <div className='avatarSets d-none'>
                        <span className='avatarholder'>  <AvatarIcon size="sz-120"/></span>
                        <span className='avatarholder'><span className='avatar-icon sz-120'><Avatarimage /></span><span className='text'>120px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-80'><Avatarimage /></span><span className='text'>80px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-64'><Avatarimage /></span><span className='text'>64px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-48'><Avatarimage /></span><span className='text'>48px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-40'><Avatarimage /></span><span className='text'>40px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-32'><Avatarimage /></span><span className='text'>32px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-24'><Avatarimage /></span><span className='text'>24px</span></span>
                        <span className='avatarholder'><span className='avatar-icon sz-20'><Avatarimage /></span><span className='text'>20px</span></span>
                        <span className='avatarholder'><span className='avatar-icon'><Avatarimage /></span><span className='text'>16px</span></span>
                        </div>
                        <h2>Initials Avatars</h2>
                        <p>Image avatars visualize users and companies. When possible, use image avatars over the initials style. When used in the top banner, avatars should be placed far right using the 40px size.</p>
                        <h3>On light mode</h3>
                        <Row className='my-4 mx-0'>
                            <Col md="2">
                            {/* <AvatarButton variant="dark" size="sz-120" /> */}
                                <a href="#" className='avatar-groove avatar-img default'><Avatarcircleuser className='svgicon-gray' /></a>
                            </Col>
                            <Col md="2">
                                <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                            </Col>
                            <Col md="2">
                                <a href="#" className='avatar-groove avatar-img default active'><Avatarcircleuser className='svgicon-gray' /></a>
                            </Col>
                            <Col md="2">
                                {/* <AvatarInitials variant="dark"/> */}
                                <span className='avatar-initials'><i className='initials'>NP</i></span></Col>
                            <Col md="2"><span className='avatar-groove avatar-initials hover'><i className='initials'>NP</i></span></Col>
                            <Col md="2"><span className='avatar-groove avatar-initials active'><i className='initials'>NP</i></span></Col>
                        </Row>


                        <h3>On dark mode</h3>
                        <Row className='my-4 bg-dark p-4 mx-0'>
                            <Col md="2">
                                <a href="#" className='avatar-img dark '><Avatarcircleuser className='svgicon-light' /></a>
                            </Col>
                            <Col md="2">
                                <span href="#" className='avatar-img dark hover'><Avatarcircleuser className='svgicon-light' /></span>
                            </Col>
                            <Col md="2">
                                <a href="#" className='avatar-img dark active'><Avatarcircleuser className='svgicon-light' /></a>
                            </Col>
                            <Col md="2"><span className='avatar-groove avatar-initials dark'><i className='initials'>NP</i></span></Col>
                            <Col md="2"><span className='avatar-groove avatar-initials dark hover'><i className='initials'>NP</i></span></Col>
                            <Col md="2"><span className='avatar-groove avatar-initials dark active'><i className='initials'>NP</i></span></Col>
                        </Row>
                        <div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.AvatarButton}
</pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants</td>
<td className="p-2 border ">light, dark
</td>
</tr> 
</table>
</div>
                        <h2>Avatar Group</h2>
                        <p>An avatar group displays a number of avatars grouped together in a stack or grid, the group can be between 3 or 5 avatars.</p>
                        <Row>
                            <Col md="4">
                            {/* <AvatarInitialsGroup /> */}
                                <div className='avatar-set'>
                                    <span className='counter'>+ 3</span>
                                    <span className='avatar-groove avatar-initials hover  '><i className='initials'>NP</i></span>
                                    <span className='avatar-groove avatar-initials  hover'><i className='initials'>NP</i></span>
                                    <span className='avatar-groove avatar-initials hover  '><i className='initials'>NP</i></span>

                                </div>
                            </Col>
                            <Col md="4">
                                {/* <AvatarButtonGroup /> */}
                                <div className='avatar-set'>
                                    <span className='counter'>+ 3</span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>

                                </div>

                            </Col>
                        </Row>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.AvatarGroup}
</pre>
</div>
                      

                        <h2 className='my-5'>User Profile Images</h2>
                        {/* <AvatarUserProfile icon="amy" /> */}
                        <img src={useravatars} className="w-100" style={{maxWidth:"998px"}}/>
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.AvatarUserProfile}
</pre>
</div>


                        
                        <h2 className='my-5'>Profile Overlay examples:</h2>
                        <Row>
                            <Col md="4">
                                <div className="cardProfileOverlayEg">
                                    <img src={profileoverlay1} />
                                </div>
                            </Col>
                            <Col md="4">
                            <div className="cardProfileOverlayEg">
                            <img src={profileoverlay2} />
                                </div>
                            </Col>
                            <Col md="4">
                            <div className="cardProfileOverlayEg">
                            <img src={profileoverlay3} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Avatar;


