import React from 'react';
import {Form, Dropdown} from "react-bootstrap"
function DropdownCheckbox(props) {
    return (
        <Dropdown className="dropdown-groove">
        <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
          Select...
          <label className="dropdown-label">Dropdown label</label>
        </Dropdown.Toggle>
      
        <Dropdown.Menu>   
          <Dropdown.Item href="#/action-1"> 
          <Form.Check className='checkbox-groove'
           onClick={(e) => e.stopPropagation()} 
                        inline
                        label="List Item"
                        name="group1"
                        type="checkbox"    
                      />  
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1"> 
          <Form.Check className='checkbox-groove'
           onClick={(e) => e.stopPropagation()} 
                        inline
                        label="List Item"
                        name="group1"
                        type="checkbox"    
                      />  
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1"> 
          <Form.Check className='checkbox-groove'
           onClick={(e) => e.stopPropagation()} 
                        inline
                        label="List Item"
                        name="group1"
                        type="checkbox"    
                      />  
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1"> 
          <Form.Check className='checkbox-groove'
           onClick={(e) => e.stopPropagation()} 
                        inline
                        label="List Item"
                        name="group1"
                        type="checkbox"    
                      />  
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1"> 
          <Form.Check className='checkbox-groove'
           onClick={(e) => e.stopPropagation()} 
                        inline
                        label="List Item"
                        name="group1"
                        type="checkbox"    
                      />  
          </Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default DropdownCheckbox;