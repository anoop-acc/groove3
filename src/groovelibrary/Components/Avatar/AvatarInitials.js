import React from 'react';

function AvatarInitials(props) {
    return (
        <span  className={`avatar-groove avatar-initials ${props.variant}`} ><i className='initials'>NP</i></span>
    );
}

export default AvatarInitials;