import React from 'react';
import {ReactComponent as Avatarimage} from "./images/image.svg"

function AvatarIcon(props) {
    return (
        <span   className={`avatar-groove avatar-icon ${props.size}`}><Avatarimage /></span>
    );
}

export default AvatarIcon;