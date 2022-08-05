import React from 'react';
import { Dropdown} from "react-bootstrap"


function DropdownBasic(props) {
    return (
        <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
   Select...
  <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>
  <Dropdown.Menu>   
    <Dropdown.Item href="#/action-1">List Item 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">List Item 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">List Item 3</Dropdown.Item>
    <Dropdown.Item href="#/action-4">List Item 4</Dropdown.Item>
    <Dropdown.Item href="#/action-5">List Item 5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    );
}

export default DropdownBasic;