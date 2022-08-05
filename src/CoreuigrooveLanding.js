import React from 'react';
import { Navbar   } from 'react-bootstrap';
import { NavLink, Outlet } from "react-router-dom"; 
import Header from "./Header"
import Footer from "./Footer"


function CoreuigrooveLanding() {
    return (
         <div>
        <header className='innerpageHeader'>
          <Header/>
          </header>          
    
        <Outlet />
        <Footer/>
        </div>
    );
}

export default CoreuigrooveLanding;