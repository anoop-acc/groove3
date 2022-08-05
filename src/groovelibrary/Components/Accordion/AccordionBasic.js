import React from 'react';
import { Accordion } from "react-bootstrap"

function AccordionBasic(props) {
    return (
        <Accordion defaultActiveKey="0" className='accordion-groove '>
        <Accordion.Item eventKey="0">
          <Accordion.Header> Timicosit </Accordion.Header>
          <Accordion.Body>
            <div className='bg-light mb-3 w-25'>&nbsp;</div>
            <div className='bg-light mb-3'>&nbsp;</div>
            <div className='bg-light mb-3'>&nbsp;</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Davniva</Accordion.Header>
          <Accordion.Body>
            The accordion component delivers large amounts of content in a small space through progressive disclosure.
            The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

            Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Sugatpe</Accordion.Header>
          <Accordion.Body>
            The accordion component delivers large amounts of content in a small space through progressive disclosure.
            The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

            Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    );
}

export default AccordionBasic;