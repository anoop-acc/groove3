import React from 'react';
import Footer from "./groovelibrary/Components/Footers/Footer"

function FootersUi(props) {
    return (
        <div className='container-fluid'>
            <h1 className='my-4'>Footer Demo</h1>
        
        <Footer variant="light" />        
       <p className='my-4'></p>
        <Footer variant="dark" />
        </div>
    );
}

export default FootersUi;