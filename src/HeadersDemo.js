import React from 'react';
import Header from "./groovelibrary/Components/Header/Header"
import HeaderHBmenu from "./groovelibrary/Components/Header/HeaderHBmenu"
import HeaderWithFilter from "./groovelibrary/Components/Header/HeaderWithFilter"

function HeadersDemo(props) {
    return (
        <div className='container-fluid'>
            <h1 className='my-4'>Header Demo</h1>
            <Header variant="light" />
            <p className='my-4'></p>

            <Header variant="dark" />
            <p className='my-4'></p>
            <HeaderHBmenu variant="light"   />
            <p className='my-4'></p>
            <HeaderHBmenu variant="dark"   />
            <p className='my-4'></p>
            <HeaderWithFilter variant="light"  />
            <p className='my-4'></p>
        </div>
    );
}

export default HeadersDemo;