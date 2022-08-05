import React from 'react'
import {  Card } from "react-bootstrap"
import {ReactComponent as Arrowrightlong} from "./images/arrow-right-long.svg"
import {ReactComponent as Checkdouble} from "./images/check-double.svg"

function Panel(props) {
    return (
        <Card className='panel-groove' variant="shadow">
        <div className='panel-title'>Notifications <span className='icon'><Checkdouble /></span></div>
        <div className='panel-row'>
        <span className='row-item-icon'></span>
        <span className='row-rs'>   <h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
       </span>
        </div>
        <div className='panel-row'>
        <span className='row-item-icon'></span>
        <span className='row-rs'>   <h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
       </span>
        </div>
        <div className='panel-row'>
        <span className='row-item-icon'></span>
        <span className='row-rs'>   <h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
       </span>
        </div>
        <div className='panel-row'>
        <span className='row-item-icon'></span>
        <span className='row-rs'>   <h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
       </span>
        </div>       
        <div className='panel-row'>
        <span className='row-item-icon'></span>
        <span className='row-rs'>   <h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
       </span>
        </div>      
        <div className='panel-footer'>
        <a className='btn-link'>View all notifications <Arrowrightlong /></a>
        </div>
    </Card>
    );
}

export default Panel;