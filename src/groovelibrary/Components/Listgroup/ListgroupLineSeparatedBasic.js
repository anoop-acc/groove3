import React from 'react';
import { ListGroup  } from "react-bootstrap" 

function ListgroupLineSeparatedBasic(props) {
    return (
        <ListGroup className='list-groove list-groove-lined mb-4 md'>
                <ListGroup.Item className='header '>SynOps Applied Now \ Active capabilities</ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowdown className='svgicon-red' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-danger"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowdownright className='svgicon-yellow' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-warning"></i>
                            <i class="fa-solid fa-circle text-warning"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowupright className='svgicon-green' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-flex list-row'>
                        <div className='flex-fill d-flex'>
                            <span className='ico'><Circlearrowupright className='svgicon-green' /></span>
                            <span className='list-title'><small>Finance & Accounting</small>
                                <h6>Procure to Pay </h6>
                            </span>
                        </div>
                        <div className='flex-fill d-flex status-indicators'>                           
                            <span className='count'>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-circle text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            </span>
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
    );
}

export default ListgroupLineSeparatedBasic;