import React, {useState} from 'react';
import {Button, Alert} from "react-bootstrap"


function Alerts(props) {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert variant={props.variant} onClose={() => setShow(false)} dismissible className='groove-alert'>          
          <i className={props.iconname}></i>  
          <div>
          <Alert.Heading>Alert title goes here</Alert.Heading>
          <p>All the world’s indeed a stage and we are merely players.
          </p>
          </div>
        </Alert>
      );
    }
    return <Button variant='secondary m-3' onClick={() => setShow(true)}>Show Alert</Button>;
 
}

export default Alerts;


 