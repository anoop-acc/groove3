import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import brandlogo from "./images/SynOps.svg"
import {ReactComponent as Bell  } from "./images/bell.svg"
import {ReactComponent as Circleexclamation} from "./images/circle-exclamation.svg"
import {ReactComponent as Circleuser} from "./images/circle-user.svg"

import Dropdown from "react-bootstrap/Dropdown";
function Dropdownmenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary btn-groove" id="dropdown-basic" size="sm">
        Select One <i class="fa-solid fa-angle-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function HeaderWithFilter(props) {
    return (
        <header className={`header-groove ${props.variant}`}>
        <Navbar expand="lg"  variant="inherit">
  <Container fluid>
    <Navbar.Brand href="#home"><span className='brand-icon'><img src={brandlogo}/></span>Product name</Navbar.Brand>
    <span className='divider divider-mainnav'></span>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>       
      </Nav>
    </Navbar.Collapse>
    <span className='me-3'>
      <Dropdownmenu  />
    </span>
    <div className='nav-secondary-links'>
       <a href="#link"><Circleexclamation  /></a>
       <a href="#link"><Bell  /></a>
       <span className='divider'></span>
       <a href="#link" className='user'><Circleuser  /></a>
       </div>
  </Container>
</Navbar>
</header>
    );
}

export default HeaderWithFilter;