import React from 'react';

function AvatarInitialsGroup(props) {
    return (
        <div className='avatar-set'>
        <span className='counter'>+ 3</span>
        <span className='avatar-groove avatar-initials hover  '><i className='initials'>NP</i></span>
        <span className='avatar-groove avatar-initials  hover'><i className='initials'>NP</i></span>
        <span className='avatar-groove avatar-initials hover  '><i className='initials'>NP</i></span>
    </div>
    );
}

export default AvatarInitialsGroup;