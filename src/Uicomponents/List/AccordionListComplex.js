import React from 'react';
import { Button, Row, Col, Accordion, ProgressBar, ListGroup } from "react-bootstrap"
import { ReactComponent as Fileinvoicedollar } from "../../groovelibrary/FontAwesomeIconLibrary/regular/file-invoice-dollar.svg"

function AccordionListComplex(props) {

  return (
    <div>
      <Accordion defaultActiveKey="0" className='accordion-groove complex'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className='multiline-hd'>Record to Report<small>1 Assessment</small></span> <span className='hd-col-2'>
              <div className='progressbar-block'>
                <small>0% complete</small>
                <ProgressBar variant="success" now={0} />
              </div>
            </span></Accordion.Header>
          <Accordion.Body>
            <div className='bg-light mb-3 w-25'>&nbsp;</div>
            <div className='bg-light mb-3'>&nbsp;</div>
            <div className='bg-light mb-3'>&nbsp;</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className='multiline-hd'>Procure to Pay<small>2 Assessments</small></span> <span className='hd-col-2'>
            <div className='progressbar-block'>
              <small>50% complete</small>
              <ProgressBar variant="success" now={50} />
            </div>
          </span></Accordion.Header>
          <Accordion.Body>
            <ListGroup className='list-groove list-info-groove'>
              <ListGroup.Item><div className='Col'><span className='ico'>
                <Fileinvoicedollar /></span>Payment Processing Assessment</div>
                <div className='Col rs'>
                  <span className='info'><span className='ico'><i class="fa-solid fa-list"></i></span><small>8 questions</small></span>
                  <span className='info'><span className='ico'><i className="fa-regular fa-clock"></i></span><small>10 min</small></span>
                  <span className='info'><span className='ico'><i class="txt-green fa-solid fa-circle-check"></i></span><small>Complete</small></span>
                </div></ListGroup.Item>

            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><span className='multiline-hd'>Order to Cash<small>1 Assessment</small></span> <span className='hd-col-2'>
            <div className='progressbar-block'>
              <small>0% complete</small>
              <ProgressBar variant="success" now={0} />
            </div>
          </span></Accordion.Header>
          <Accordion.Body>
            The accordion component delivers large amounts of content in a small space through progressive disclosure.
            The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.

            Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  );
}

export default AccordionListComplex;