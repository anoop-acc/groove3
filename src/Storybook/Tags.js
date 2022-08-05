import React from 'react';
import { Badge } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import xmark from "../groovelibrary/FontAwesomeIconLibrary/regular/xmark.svg"
function Tags(props) {

    const codetags =`<Badge className='badge-groove'  bg="blue"  >Blue</Badge>
<Badge className='badge-groove' bg="caribbean" >Caribbean</Badge>                         
<Badge className='badge-groove' bg="coral" >Coral</Badge>
<Badge className='badge-groove' bg="cyan" >Cyan  </Badge>
<Badge className='badge-groove' bg="green" >Green</Badge>
<Badge className='badge-groove' bg="iris" >iris  </Badge>
<Badge className='badge-groove' bg="pink" >Pink  </Badge>
<Badge className='badge-groove' bg="plum" >plum</Badge>
<Badge className='badge-groove' bg="red" >red</Badge>
<Badge className='badge-groove' bg="teal" >Teal</Badge>
<Badge className='badge-groove' bg="yellow" >Yellow</Badge>
<Badge className='badge-groove' bg="white" >White</Badge>
<Badge className='badge-groove' bg="slate" >Slate</Badge>`

const codebadgewithxmark =`<Badge className='badge-groove'  bg="blue"  >Blue <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="caribbean" >Caribbean <i class="fa-solid fa-xmark" /></Badge>                         
<Badge className='badge-groove' bg="coral" >Coral <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="cyan" >Cyan <i class="fa-solid fa-xmark" /> </Badge>
<Badge className='badge-groove' bg="green" >Green <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="iris" >iris  <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="pink" >Pink <i class="fa-solid fa-xmark" /> </Badge>
<Badge className='badge-groove' bg="plum" >plum <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="red" >red <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="teal" >Teal <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="yellow" >Yellow <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="white" >White <i class="fa-solid fa-xmark" /></Badge>
<Badge className='badge-groove' bg="slate" >Slate <i class="fa-solid fa-xmark" /></Badge>`
    return (
        <div  >
             
                    <h2 className='pagetitle'>{props.title}</h2>
                  
                    <div className='tagSet'>
                    <Badge className='badge-groove'  bg="blue"  >Blue</Badge>
                    <Badge className='badge-groove' bg="caribbean" >Caribbean</Badge>                         
                         <Badge className='badge-groove' bg="coral" >Coral</Badge>
                        <Badge className='badge-groove' bg="cyan" >Cyan  </Badge>
                        <Badge className='badge-groove' bg="green" >Green</Badge>
                        <Badge className='badge-groove' bg="iris" >iris  </Badge>
                        <Badge className='badge-groove' bg="pink" >Pink  </Badge>
                        <Badge className='badge-groove' bg="plum" >plum</Badge>
                        <Badge className='badge-groove' bg="red" >red</Badge>
                        <Badge className='badge-groove' bg="teal" >Teal</Badge>
                        <Badge className='badge-groove' bg="yellow" >Yellow</Badge>
                        <Badge className='badge-groove' bg="white" >White</Badge>
                        <Badge className='badge-groove' bg="slate" >Slate</Badge>
                        <pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codetags}</code>
          </pre>
                    </div>
                   
                    <h2 className='mt-5'> Labels</h2>
                   
                    <div className='tagSet'>
                    <Badge className='badge-groove'  bg="blue"  >Blue <i class="fa-solid fa-xmark" /></Badge>
                    <Badge className='badge-groove' bg="caribbean" >Caribbean <i class="fa-solid fa-xmark" /></Badge>                         
                         <Badge className='badge-groove' bg="coral" >Coral <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="cyan" >Cyan <i class="fa-solid fa-xmark" /> </Badge>
                        <Badge className='badge-groove' bg="green" >Green <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="iris" >iris  <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="pink" >Pink <i class="fa-solid fa-xmark" /> </Badge>
                        <Badge className='badge-groove' bg="plum" >plum <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="red" >red <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="teal" >Teal <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="yellow" >Yellow <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="white" >White <i class="fa-solid fa-xmark" /></Badge>
                        <Badge className='badge-groove' bg="slate" >Slate <i class="fa-solid fa-xmark" /></Badge>

                        <pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codebadgewithxmark}</code>
          </pre>
                       
                    </div>
              
        </div>

    );
}

export default Tags;