import { useState } from "react";
import { Row, Col, FloatingLabel, Form, Dropdown } from "react-bootstrap"
import Fileupload from "./Inputs/Fileupload"
import Datepicker from "./Inputs/Datepicker"
import { DatePicker, Space } from 'antd';

function InputFields(props) {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  const [value1, setValue1] = useState("Enter text here …");
  const [value2, setValue2] = useState("|");
  const [value3, setValue3] = useState("Enter text here …");
  const [value4, setValue4] = useState("Input value");
  const [value9, setValue9] = useState("Input value");
  const [value5, setValue5] = useState("Valid Default");
  const [value6, setValue6] = useState("Valid Focus");
  const [value7, setValue7] = useState("InValid Default");
  const [value8, setValue8] = useState("InValid Focus");

  const [selectedItem, setSelectedItem] = useState("Select Item");
 //dropdownwithcheck 
 const [selectedCheckItem, setSelectedCheckItem] = useState("Select... ");
 function toggleCheckbox(addItem) {
  if (selectedCheckItem.indexOf(addItem) < 0) {
    setSelectedCheckItem(`${selectedCheckItem} ${addItem}`);
  } else {
    setSelectedCheckItem(selectedCheckItem.replace(addItem, ""));
  }
}

  return (
    <div>
      <h2>Text Fields</h2>
      <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Default"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove" type="text" placeholder=" " 
                 value={value1}
                 onChange={(event) => setValue1(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="FOCUS"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove active" type="text" placeholder=" " 
                 value={value2}
                 onChange={(event) => setValue2(event.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Disabled"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove" disabled type="text" placeholder="name@example.com" 
                 value={value3}
                 onChange={(event) => setValue3(event.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove"
              >
                <Form.Control className="form-control-groove is-valid" type="text" placeholder="name@example.com" 
                 value={value5}
                 onChange={(event) => setValue5(event.target.value)}
                />
              </FloatingLabel>


            </Col>
            <Col md="3">
            <FloatingLabel
                controlId="floatingInput"
                label="Field Label"
                className="mb-3 form-floating-groove "
              >
                <Form.Control className="form-control-groove is-invalid active" type="text" placeholder="name@example.com" 
                 value={value8}
                 onChange={(event) => setValue8(event.target.value)}
                />
              </FloatingLabel>
            </Col>           
          </Row>
          <h2>Text Box Fields</h2>
          <Row>
            <Col md="4">
            <Form.Group className="form-textarea-groove"  >
    <Form.Label>Default</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers.  "/>
 </Form.Group>
            </Col>
            <Col md="4">
            <Form.Group className="form-textarea-groove"  >
    <Form.Label>Focus</Form.Label>
    <Form.Control className="form-control-groove active" as="textarea" rows={3} Placeholder="| "/>
 </Form.Group>
            </Col>
            <Col md="4">
            <Form.Group className="form-textarea-groove"  >
    <Form.Label>Disabled</Form.Label>
    <Form.Control className="form-control-groove" as="textarea" rows={3} Placeholder="Enter text here …" disabled/>
 </Form.Group>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md="4">
            <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Default</Form.Label>
    <Form.Control className="form-control-groove is-valid" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
            </Col>
            <Col md="4">
            <Form.Group className="form-textarea-groove"  >
    <Form.Label>valid - Default</Form.Label>
    <Form.Control className="form-control-groove is-invalid" as="textarea" rows={3} Placeholder="All the world’s indeed a stage and we are merely players. Performers and portrayers. Each another’s audience outside the gilded cage."/>
 </Form.Group>
            </Col>
            <Col md="3"> </Col>
          </Row>
          <h2>Drop Down Fields</h2>
          <Row>
            <Col md="4">
            <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
  {selectedItem}
    <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>

  <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => setSelectedItem("List A")}
            >
              List A
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => setSelectedItem("List B")}
            >
              List B
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => setSelectedItem("List C")}
            >
              List C
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => setSelectedItem("List D")}
            >
              List D
            </Dropdown.Item>            
          </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col md="4">
            <Dropdown className="dropdown-groove">
  <Dropdown.Toggle variant="outline-secondary " id="dropdown-basic"  >
  <span>{selectedCheckItem}</span>
    <label className="dropdown-label">Dropdown label</label>
  </Dropdown.Toggle>

  <Dropdown.Menu>   
    <Dropdown.Item href="#/action-1"> 
    <Form.Check className='checkbox-groove'
      onClick={(e) => {
        e.stopPropagation();
        toggleCheckbox("List A");
      }}
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-2"> 
    <Form.Check className='checkbox-groove'
      onClick={(e) => {
        e.stopPropagation();
        toggleCheckbox("List B");
      }}
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3"> 
    <Form.Check className='checkbox-groove'
      onClick={(e) => {
        e.stopPropagation();
        toggleCheckbox("List C");
      }}
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-4"> 
    <Form.Check className='checkbox-groove'
      onClick={(e) => {
        e.stopPropagation();
        toggleCheckbox("List D");
      }}
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
    <Dropdown.Item href="#/action-5"> 
    <Form.Check className='checkbox-groove'
      onClick={(e) => {
        e.stopPropagation();
        toggleCheckbox("List E");
      }}
                  inline
                  label="List Item"
                  name="group1"
                  type="checkbox"    
                />  
    </Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col md="4">
             
            </Col>
          </Row>
<h2 className="my-3">Date Fields</h2>
<Row>
  <Col md="4">
  <DatePicker onChange={onChange} className="datepicker-groove" />
  </Col>
  <Col md="4"></Col>
  <Col md="4"></Col>
</Row>
<h2  className="my-3">File Uploader</h2>
<Row>
<Col md="4">
<div className="fileupload-groove">
<Fileupload /> 
</div>
    </Col>
</Row>
    </div>
  );
}

export default InputFields;