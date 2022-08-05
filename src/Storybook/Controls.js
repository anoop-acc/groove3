import React from 'react';
import SliderComponent from "./Controls/SliderComponent"
import {Form, Row, Col} from "react-bootstrap"
function Controls(props) {


const codeCheckbox =`import {Form} from "react-bootstrap"
<Form.Check className='checkbox-groove'
inline
label="Checkbox"
name="group1"
type="checkbox"/>`

const codeRadio =`import {Form} from "react-bootstrap"
<Form.Check className='radiobutton-groove'
inline
label="Radiobutton"
name="group1"
type="radio"/>`

const codeToggle =`import {Form} from "react-bootstrap"
<Form>
<Form.Check className='switch-groove form-switch-inline'
  type="switch"
  id="custom-switch"
  label="off"/>
  </Form>`

  const codeSlider=`import {Slider} from "antd"
<SliderComponent slidervalue="30" variant="primary" />`

    return (
        <div>
            <h2 className='my-3'>Checkbox</h2>   
            <Form.Check className='checkbox-groove'
                  inline
                  label="Checkbox"
                  name="group1"
                  type="checkbox"
                 
                /> 
           

           <pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codeCheckbox}</code>
          </pre>
            <h2  className='my-3'>Radio Button</h2>

            <Form.Check className='radiobutton-groove'
                    inline
                    label="Radiobutton"
                    name="group1"
                    type="radio"                    
                  />
            <Form.Check className='radiobutton-groove'
                    inline
                    label="Radiobutton"
                    name="group1"
                    type="radio"
                    
                  />
<pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codeRadio}</code>
          </pre>
            <h2  className='my-3'>Toggle Switch</h2>
            <Form>
              <Form.Check className='switch-groove form-switch-inline'
                type="switch"
                id="custom-switch"
                label=""
              />  </Form>
<pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codeToggle}</code>
          </pre>
            <h2  className='my-3'>Slider</h2>
            <Row>
              <Col md="6"><SliderComponent slidervalue="30" variant="primary"/></Col>
              <Col md="6"><SliderComponent slidervalue="50" variant="blue"/></Col>
            </Row>
            <pre className='codeview my-4'>
            <code className='cmt'>{ }</code>                       
            <code>{codeSlider}</code>
          </pre>
            
        </div>
    );
}

export default Controls;