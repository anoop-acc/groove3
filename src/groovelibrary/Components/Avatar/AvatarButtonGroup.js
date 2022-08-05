import React from 'react';
import { ReactComponent as Avatarcircleuser } from "./images/circle-user.svg"
function AvatarButtonGroup(props) {
    return (
        <div className='avatar-set'>
                                    <span className='counter'>+ 3</span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
                                    <span href="#" className='avatar-groove avatar-img default hover'><Avatarcircleuser className='svgicon-gray' /></span>
         </div>
    );
}

export default AvatarButtonGroup;