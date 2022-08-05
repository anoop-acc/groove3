import React from 'react';
import { ReactComponent as Avatarcircleuser } from "./images/circle-user.svg"
function AvatarButtonIcon(props) {
    return (
        <a href="#" className={`avatar-groove avatar-img ${props.variant} ${props.size}`} ><Avatarcircleuser  /></a>
    );
}

export default AvatarButtonIcon;