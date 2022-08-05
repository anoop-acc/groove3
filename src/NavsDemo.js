import React from 'react';
import NavBasic from "./groovelibrary/Components/Navs/NavBasic"
import NavBasicDropdown from "./groovelibrary/Components/Navs/NavBasicDropdown"
import TabNav from "./groovelibrary/Components/Navs/TabNav"
import Breadcrumb from "./groovelibrary/Components/Navs/Breadcrumb"

function NavsDemo(props) {
    return (
        <div className="container-fluid">
        <h1 className='my-4'>Navigations </h1>
        <h3>Basic Navigation</h3>
        <NavBasic />
        <hr/>
        <h3>Basic Dropdown Navigation </h3>
        <NavBasicDropdown />
        <hr/>
        <h3>Tab Navigation </h3>
        <div className="w-25"><TabNav /></div>
        <hr/>
<h3 className='mb-3'>Breadcrumbs</h3>
<Breadcrumb />
        </div>
        

    );
}

export default NavsDemo;