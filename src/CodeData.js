export const CodeData = [
    {
//==========================================================Controls 
      checkbox: `import {Form} from "react-bootstrap"
      <Form.Check className='checkbox-groove'
      inline
      label="Checkbox"
      name="group1"
      type="checkbox"/>`,

       radiobutton:`import {Form} from "react-bootstrap"
       <Form.Check className='radiobutton-groove'
       inline
       label="Radiobutton"
       name="group1"
       type="radio"/>`,

       toggle:`import {Form} from "react-bootstrap"
       <Form>
       <Form.Check className='switch-groove form-switch-inline'
         type="switch"
         id="custom-switch"
         label="off"/>
         </Form>`,
         slider:`import {Slider} from "antd"
         <SliderComponent slidervalue="30" variant="primary" />`,
         
         slidercode:`import React from 'react';
import { Slider } from "antd"
function SliderComponent(props) {
 return (         
 <Slider defaultValue={props.slidervalue} className={}  />
 );
 }
export default SliderComponent;

//Import customised Component     
import SliderComponent from "./SliderComponent"
<SliderComponent slidervalue="30" variant="primary"/>`,

//==========================================================Carousel 
Carouselcode:`import {Carousel} from "react-bootstrap"
<Carousel className="carousel-groove">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image path"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image path"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image path"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>`,
//==========================================================Pagination
PaginationCode:`import { Pagination } from 'antd';
<Pagination className='pagination-groove' defaultCurrent={6} total={500} />`,

Spinner:`<i class="fa-solid fa-spinner rotate"></i>`,
//========================================================== Card Tiles Modals
Cardbasic:`import { Modal } from "react-bootstrap";
<Card className='card-groove' variant="shadow"></Card>
<Card className='card-groove' variant="outline"></Card>
<Card className='card-groove' variant="shadow outline"></Card>`,

ModalBasicCenter:`import ModalBasicCenter from "./groovelibrary/Components/Modal/ModalBasicCenter"
<ModalBasicCenter />

//In Main Component 
const [modalshow, setShow] = React.useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

//Trigger Modal box
<button onClick={handleShow2} >Open Modal</button>`,

ModalBasicDefault:`import ModalBasicDefault from "./groovelibrary/Components/Modal/ModalBasicDefault"
<ModalBasicDefault />

//In Main Component 
const [modalshow, setShow] = React.useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

//Trigger Modal box
<button onClick={handleShow2} >Open Modal</button>`,

Panel:`import PanelBasic from "./groovelibrary/Components/Panel/PanelBasic"
<PanelBasic />

import PanelWithIcon from "./groovelibrary/Components/Panel/PanelWithIcon"
<PanelWithIcon />`,

//==========================================================
TableBasic:`import TableBasic from "/TableBasic"
<TableBasic variant={"primary"} />

//TableBasic  Code

import "antd/dist/antd.css";
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function App() {  
  return (
    <div className="App">
      <Table dataSource={dataSource} columns={columns} />;
   </div>
  );
}`,
//=========================================================Input Fields
inputtext:`import { FloatingLabel, Form } from "react-bootstrap"
<FloatingLabel
controlId="floatingInput"
label="Default"
className="mb-3 form-floating-groove">
<Form.Control className="form-control-groove" type="text"    value={value1}
 onChange={(event) => setValue1(event.target.value)}/>
</FloatingLabel>`,
Textarea:`import { FloatingLabel, Form } from "react-bootstrap"
<Form.Group className="form-textarea-groove"  >
<Form.Label>Default</Form.Label>
<Form.Control 
className="form-control-groove" 
as="textarea" 
rows={3} 
Placeholder="Default Text"/>
</Form.Group>`,
Dropdown:`import DropdownBasic from "./groovelibrary/Components/Dropdownmenu/DropdownBasic"
<DropdownBasic />

//Dropdown with Checkbox

import DropdownCheckbox from "./groovelibrary/Components/Dropdownmenu/DropdownCheckbox
<DropdownCheckbox />`,
DateFields:`import { DatePicker, Space } from 'antd';
<DatePicker onChange={onChange} className="datepicker-groove" />`,
SearchInputs:``,
FileUploader:`import Fileupload from "./groovelibrary/Components/Fileupload/Fileupload"
<Fileupload /> `,
// =====================================================================LINKS
Linkscode:`<a href="#" class="link-groove  link-blue">Primary link</a>
<a href="#" class="link-groove  link-primary">Primary link</a>
<a href="#" class="link-groove  link-dark">Primary link</a>
<a href="#" class="link-groove  link-gray">Primary link</a>`,
// =====================================================================Overlay Modal
OverlayModalA:`import Modalbox from "./groovelibrary/Components/Overlay/Modalbox

const [modalshow, setShow] = React.useState(false);    
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

<Modalbox show={modalshow} onClose={handleClose} />`,

OverlayModalB:`import ModalboxPlain from "./groovelibrary/Components/Overlay/ModalboxPlain

const [modalshow, setShow] = React.useState(false);    
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
	
<ModalboxPlain show={modalshow2} onClose={handleClose} />`,

// =====================================================================Progressbar

Progressbar:`import { ProgressBar  } from "react-bootstrap"

<div className='progressbar-groove-wrapper '>
<label><b>{{50}%}</b> complete</label>
<ProgressBar now={0} label={{50}} variant="secondary" className='progressbar-groove' />
</div>`,
BasicGauge:`import { Progress } from 'antd';
<div className='CircularProgressbar-card progressbar-circle-groove '>
<div className='gauge-progressbar-wrapper' >
<Progress 
  type="dashboard" 
  variant="primary" 
  percent={50} 
  gapDegree={130} 
  strokeWidth={12} 
  width="162px" 
  height="162px" />
</div>
<label>Lorem Ipsum</label>
</div>`,
BasicRadial:`import { Progress } from 'antd';
<div className='CircularProgressbar-card progressbar-circle-groove '>
<Progress 
type="circle" 
variant="blue" 
percent={90} 
strokeWidth={12} 
width="162px" />
<label>Lorem Ipsum</label>
</div>`,

// =====================================================================Tags Badges

Tags:`import { Badge } from "react-bootstrap"
<Badge className='badge-groove'  bg="blue"  >Blue</Badge>`,

Tagswithclose:`import { Badge } from "react-bootstrap"
<Badge className='badge-groove'  bg="blue"  >Blue <i class="fa-solid fa-xmark" /></Badge>`,

// =====================================================================Tooltip
Tooltip:`import {Tooltip, OverlayTrigger  } from "react-bootstrap"
<OverlayTrigger 
    placement="bottom"
    overlay={<Tooltip 
      className='tooltip-groove'>
      Check out this avatar</Tooltip>}>
    {({ ref, ...triggerHandler }) => (
    <Button variant="light" {...triggerHandler} className="d-inline-flex align-items-center">
	  <span className="ms-1">Hover to see</span>
    </Button>
    )}
</OverlayTrigger>`,

// =====================================================================List

listtype1:`import { ListGroup } from "react-bootstrap"
<ListGroup className='list-groove'>
<ListGroup.Item>30 Leli Plaza</ListGroup.Item>
<ListGroup.Item>1195 Lowa Path</ListGroup.Item>
<ListGroup.Item>1877 Afbe Pike</ListGroup.Item>
</ListGroup>`,
listtype2:`import { ListGroup } from "react-bootstrap"
<ListGroup className='list-groove list-action-groove'>
<ListGroup.Item><span><Image /> Darrell Scott</span> <i className="fa-solid fa-angle-right"></i> </ListGroup.Item>
<ListGroup.Item><span><Image />Allen Lindsey</span> <i className="fa-solid fa-angle-right"></i>  </ListGroup.Item>
<ListGroup.Item><span><Image /> Lilly Neal </span> <i className="fa-solid fa-angle-right"></i></ListGroup.Item>
</ListGroup>`,
listtype3:`import { ListGroup } from "react-bootstrap"
<ListGroup className='list-groove list-info-groove'>
<ListGroup.Item><div className='Col'><span className='ico'><Fileinvoicedollar /></span>Payment Processing Assessment</div>
  <div className='Col rs'>
  <span className='info'><span className='ico'><i class="fa-solid fa-list"></i></span><small>8 questions</small></span>
  <span className='info'><span className='ico'><i className="fa-regular fa-clock"></i></span><small>10 min</small></span>
  <span className='info'><span className='ico'><Circlecheck className='svgicon-green' /></span><small>Complete</small></span>
  </div></ListGroup.Item>
</ListGroup>`,
listtype4:`import ListgroupDescriptionInfo from "./groovelibrary/Components/Listgroup/ListgroupDescriptionInfo"
<ListgroupDescriptionInfo />`,

listtype5:`import { ListGroup } from "react-bootstrap"
<ListGroup className='list-groove list-description-card-groove'>
<ListGroup.Item>Lorem Tech Reporting Increased Sales
  <p>To help meet the critical needs resulting from the global COVID-19 pandemic, Lorem Tech and…</p>
  <div className='list-description-footer'>
  <span className='ico'><img src="" /></span>Brooklyn, NY.
  <small>Last Updated: 04 Feb 2020</small>
  </div>
</ListGroup.Item>
</ListGroup>`,

expandablelist:`import AccordionBasic from "./groovelibrary/Components/Accordion/AccordionBasic"
<AccordionBasic/>`,

expandablelistcomplex:`import AccordionComplex from "./groovelibrary/Components/Accordion/AccordionComplex"
</AccordionComplex>`,

ListLineSeparated:`import ListGroupLineSeparated from "./groovelibrary/Components/Listgroup/ListGroupLineSeparated"
<ListGroupLineSeparated />`,
ListgroupLineSeparatedColumn:`import ListgroupLineSeparatedColumn from "./groovelibrary/Components/Listgroup/ListgroupLineSeparatedColumn"
<ListgroupLineSeparatedColumn/>`,

ListgroupLineSeparatedBasic:`import ListgroupLineSeparatedBasic 
from "./groovelibrary/Components/Listgroup/ListgroupLineSeparatedBasic"
<ListgroupLineSeparatedBasic />`,

ListgroupSM:`import ListgroupSM 
from "./groovelibrary/Components/Listgroup/ListgroupSM"
<ListgroupSM />`,
ListgroupTopSupportingIcon:`import ListgroupTopSupportingIcon 
from "./groovelibrary/Components/Listgroup/ListgroupTopSupportingIcon"
<ListgroupTopSupportingIcon/>`,

//HEADER

headerbasic:`import Header from "./groovelibrary/Components/Header/Header"
<Header variant="light" />`,

footercode:`import Header from "./groovelibrary/Components/Footers/Footer"
<Footer variant="light" />`,

//Button =================================================
buttonsfilled:`<Button className='btn-groove' variant="primary">Primary</Button> 
<Button className='btn-groove' variant="blue">Link</Button>
<Button className='btn-groove' variant="dark">Dark</Button>
<Button className='btn-groove' variant="secondary">Secondary</Button>
<Button className='btn-groove' variant="success">Success</Button>
<Button className='btn-groove' variant="warning">Warning</Button>
<Button className='btn-groove' variant="danger">Danger</Button> 
<Button className='btn-groove' variant="info">Info</Button>
<Button className='btn-groove' variant="light">Light</Button>`,

buttonoutline:`<Button className='btn-groove' variant="outline-primary">Primary</Button> 
<Button className='btn-groove' variant="outline-blue">Link</Button>
<Button className='btn-groove' variant="outline-dark">Dark</Button>
<Button className='btn-groove' variant="outline-secondary">Secondary</Button>
<Button className='btn-groove' variant="outline-light">Light</Button>
<Button className='btn-groove' variant="outline-success">Success</Button>
<Button className='btn-groove' variant="outline-warning">Warning</Button>
<Button className='btn-groove' variant="outline-danger">Danger</Button> 
<Button className='btn-groove' variant="outline-info">Info</Button>`,
buttonwithicon1: `<Button className='btn-groove' size="lg" variant="primary"  >
<span className='ico-ls'>
<i class="fa-solid fa-compass-drafting"></i>  //html icon, image, svg icon here
</span>
Button label
</Button>`,
buttonwithicon2: `<Button className='btn-groove' variant="primary" size="lg">
  Button label 
  <span className='ico-rs'>
  <i class="fa-solid fa-arrow-right-long"></i> //html icon, image, svg icon here
  </span>
  </Button>`,

  buttonutility1: `<Button className='btn-utility btn-groove ' size="sm" variant=""  >
<span className='ico-ls'>
<i class="fa-solid fa-compass-drafting"></i>
</span> 
Button label
</Button>`,

buttonutility2: `<Button className='btn-utility btn-groove ' size="sm" variant=""  >
<span className='ico-rs'>
<i class="fa-solid fa-compass-drafting"></i>//html icon, image, svg icon here
</span> 
Button label
</Button>`,
buttonicononly: `<Button className='btn-groove ' variant='icon'  >
<i class="fa-solid fa-compass-drafting"></i>
</Button>`,

//Alert/Notification  =================================================

codeComment : `//Custom Class - className='groove-alert'`,
codeComment2: `//Import - Alert Component'`,
Alertmain : `import React, {useState} from 'react';
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

export default Alerts;`,

AlertCode : `<Alert
variant="secondary"
show={showF}
dismissible
onClose={() => setShowF(false)}
className='groove-alert'>
<i className="fa-solid fa-circle-xmark"></i>
<div>
  <Alert.Heading>Alert title goes here</Alert.Heading>
  <p>Content
  </p>
</div>
</Alert> `,
Headerwithfilter:`import HeaderWithFilter from "./groovelibrary/Components/Header/HeaderWithFilter"

<HeaderWithFilter variant="light"  />`,

AvatarIcon:`//Basic Avatar
import AvatarIcon from "/groovelibrary/Components/Avatar/Avatar"
<AvatarIcon size="sz-120"/>`,

AvatarButton:`//Avatar Button with icons  
import AvatarIcon from "/groovelibrary/Components/Avatar/AvatarButton"
<AvatarButton variant="dark"/>

//Avatar Button with  Initials
import AvatarIcon from "/groovelibrary/Components/Avatar/AvatarInitials"
<AvatarInitials variant="dark"/>`,

AvatarGroup:`//Avatar Initials Group
import AvatarInitialsGroup from "/groovelibrary/Components/Avatar/AvatarInitialsGroup"
<AvatarInitialsGroup />

//Avatar Button (with icon) Group
import AvatarButtonGroup from "/groovelibrary/Components/Avatar/AvatarButtonGroup"
<AvatarButtonGroup/>`,


AvatarUserProfile:`//Avatar User Profile (with User Profile icon) 
import AvatarButtonGroup from "/groovelibrary/Components/Avatar/AvatarUserProfile"
<AvatarUserProfile icon="imported icon name" />`,




Breakpoint:`//Source mixins

// No media query necessary for xs breakpoint as it's effectively "@media (min-width: 0) { ... }"
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at "min-width: 0", and then show at the "sm" breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}`,

typographyHeadins1:`<h1>Heading Default (medium)</h1>
<h1 className="h1">Heading Bold (Semi bold)</h1>
<h1 className="regular">Heading regular (Regular)</h1>`,

typographyHero:`<h1 className="display-1-xl">Hero Type Bigger Heading  </h1>
<h1 className="display-1-sm">Hero Type Smaller Heading </h1>`,
 
textcolors:`<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>`,

navbasic:`import NavBasic from "/groovelibrary/Components/Navs/NavBasic"
<NavBasic />

//Nav Dropdowns

<NavBasicDropdown />
import NavBasicDropdown from "/groovelibrary/Components/Navs/NavBasicDropdown"`,

navTabs:`import TabNav from "/groovelibrary/Components/Navs/TabNav"
<TabNav />`,

breadcrumb:`import Breadcrumb from "/groovelibrary/Components/Navs/Breadcrumb"
<Breadcrumb />`,

layout:`import Layout from "/groovelibrary/Components/Layouts/Layout"
<Layout />      `


}
]