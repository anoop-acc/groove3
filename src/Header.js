import { useState } from "react";
import { Nav, Navbar, NavDropdown, Container, Dropdown } from 'react-bootstrap'
import angledown from "./Assets/images/angle-down.svg"
import { Link } from "react-router-dom"

import SynOps from "./images/SynOps.svg"
import { NavLink } from 'react-router-dom'
function Header(props) {

  // const [selectedItem, setSelectedItem] = useState("Design View");

  // function DesignView() {
  //   setSelectedItem("Design View");
  // }
  // function DevView() {
  //   setSelectedItem("Developer View");

  // }

  return (

    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container fluid className=''>
        <Navbar.Brand ><NavLink to="/LibraryLanding"><img src={SynOps} />Groove Core UI 3.0</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavLink className="nav-link" to="/CoreuigrooveLanding/Overview">Fountation</NavLink>
            <NavLink className="nav-link" to="/CoreuigrooveLanding/Navigations">Navigation</NavLink>
            <NavLink className="nav-link" to="/CoreuigrooveLanding/UiComponents">Components</NavLink>
            <NavLink className="nav-link" to="/CoreuigrooveLanding/Datavisualization">Data Visualization</NavLink>
            <NavLink className="nav-link" to="/CoreuigrooveLanding/MediaAndIllustration">Media & Illustration</NavLink>
            <NavLink className="nav-link" to="/CoreuigrooveLanding/MediaAndIllustration">Mobile</NavLink>




          </Nav>
          <i class="fa-regular fa-bell text-secondary"></i>
          {/* <NavLink className="nav-link m-0 btn-viewchange"  to="/CoreuigrooveLanding/MediaAndIllustration">Design View</NavLink>  */}

          {/* <Dropdown className="">
            <Dropdown.Toggle variant="link" id="dropdown-basic" className="btn-viewchange">
              {selectedItem}  <img src={angledown} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                href="#/action-1"
                to="/CoreuigrooveLanding/Overview"
                onClick={DesignView}
              >
                Design View
              </Dropdown.Item>
              <Dropdown.Item
                onClick={DevView}
                as={Link}
                href="#/action-2"
                to="/Storybook"


              >
                Developer View
              </Dropdown.Item>



            </Dropdown.Menu>
          </Dropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;