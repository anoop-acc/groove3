import React from 'react';
import {Button} from "react-bootstrap"

function Buttons(props) {


    const buttonsfilled = `<Button className='btn-groove' variant="primary">Primary</Button> 
<Button className='btn-groove' variant="blue">Link</Button>
<Button className='btn-groove' variant="dark">Dark</Button>
<Button className='btn-groove' variant="secondary">Secondary</Button>
<Button className='btn-groove' variant="success">Success</Button>
<Button className='btn-groove' variant="warning">Warning</Button>
<Button className='btn-groove' variant="danger">Danger</Button> 
<Button className='btn-groove' variant="info">Info</Button>
<Button className='btn-groove' variant="light">Light</Button>`


    const buttonoutline = `<Button className='btn-groove' variant="outline-primary">Primary</Button> 
<Button className='btn-groove' variant="outline-blue">Link</Button>
<Button className='btn-groove' variant="outline-dark">Dark</Button>
<Button className='btn-groove' variant="outline-secondary">Secondary</Button>
<Button className='btn-groove' variant="outline-light">Light</Button>
<Button className='btn-groove' variant="outline-success">Success</Button>
<Button className='btn-groove' variant="outline-warning">Warning</Button>
<Button className='btn-groove' variant="outline-danger">Danger</Button> 
<Button className='btn-groove' variant="outline-info">Info</Button>`
    return (
        <div>
            
           
            <h3  className='pt-3'>Default Buttons</h3>
            <div className='d-flex py-4  justify-content-between'>
            <Button className='btn-groove' variant="primary" >Button label</Button>
                <Button className='btn-groove' variant="blue">Button label</Button>
                <Button className='btn-groove' variant="dark">Button label</Button>
                <Button className='btn-groove' variant="secondary">Button label</Button>                
                <Button className='btn-groove' variant="light">Button label</Button>
                <Button className='btn-groove' variant="success">Success</Button>
                <Button className='btn-groove' variant="warning">Warning</Button>
    <Button className='btn-groove' variant="danger">Danger</Button> 
    <Button className='btn-groove' variant="info">Info</Button>
                </div>
            <pre className='codeview'>{buttonsfilled}</pre>
            <h3 className='pt-3'>Button Outline</h3>
            <div className='d-flex  py-4 justify-content-between'>
            <Button className='btn-groove' variant="outline-primary">Button label</Button>
                <Button className='btn-groove' variant="outline-blue">Button label</Button>
                <Button className='btn-groove' variant="outline-dark">Button label</Button>
                <Button className='btn-groove' variant="outline-secondary">Button label</Button>                 
                <Button className='btn-groove' variant="outline-light">Button label</Button>
                <Button className='btn-groove' variant="outline-success">Success</Button>
                <Button className='btn-groove' variant="outline-warning">Warning</Button>
    <Button className='btn-groove' variant="outline-danger">Danger</Button> 
    <Button className='btn-groove' variant="outline-info">Info</Button>
                 </div>
            <pre className='codeview'>{buttonoutline}</pre>
        </div>
    );
}

export default Buttons;