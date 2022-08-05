import Nav from 'react-bootstrap/Nav';

function TabNav() {
  return (
    <Nav fill variant="tabs" className='tab-groove' defaultActiveKey="/home">
     
      <Nav.Item>
        <Nav.Link eventKey="Tab-1">Tab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Tab-2">Tab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Tab-3">Tab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Tab  Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabNav;