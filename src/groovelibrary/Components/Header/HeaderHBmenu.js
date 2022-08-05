import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import brandlogo from "./images/SynOps.svg"
import {ReactComponent as Bell  } from "./images/bell.svg"
import {ReactComponent as Circleexclamation} from "./images/circle-exclamation.svg"
import {ReactComponent as Circleuser} from "./images/circle-user.svg"


function HeaderLight(props) {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };


    return (
        <header className={`header-groove header-groove-hb-menu  ${props.variant}`}>
        <Navbar expand="lg"  variant="inherit">
  <Container fluid>
  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
  <span className='divider divider-mainnav'></span>
    <Navbar.Brand href="#home"><span className='brand-icon'><img src={brandlogo}/></span>Product name</Navbar.Brand>
    
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
       <div className='nav-secondary-links'>
       <a href="#link"><Circleexclamation  /></a>
       <a href="#link"><Bell  /></a>
       <span className='divider'></span>
       <a href="#link" className='user'><Circleuser  /></a>
       </div>
       {/* <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navlinks">
        <Nav.Link href="#home">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>       
      </Nav>
    </Navbar.Collapse> */}
    <div   className={`slidermenu ${isActive ? "hide" : "show"}`}>
    <Nav className="me-auto navlinks">
        <Nav.Link href="#home">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>
        <Nav.Link href="#link">Main Link</Nav.Link>       
      </Nav>
    </div>
  </Container>
</Navbar>
</header>
    );
}

export default HeaderLight;