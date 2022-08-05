import React from 'react'
import {  Card } from "react-bootstrap"
import {ReactComponent as Arrowrightlong} from "./images/arrow-right-long.svg"
import {ReactComponent as Checkdouble} from "./images/check-double.svg"
import {ReactComponent as Circlecheck} from "./images/circle-check.svg"
import {ReactComponent as TriangleExclamation} from "./images/triangle-exclamation.svg"
import {ReactComponent as CircleInfo} from "./images/circle-info.svg"
import {ReactComponent as CircleXmark} from "./images/circle-xmark.svg"

function PanelWithIcon(props) {
    return (
        <Card className='panel-groove' variant="shadow withicon">
        <div className='panel-title'>Notifications <span className='icon'><Checkdouble /></span></div>
        <div className='panel-row'> 
            <span className='row-item-icon'><Circlecheck /></span>
            <span className='row-rs'><h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
            </span>
        </div>
        <div className='panel-row'> 
            <span className='row-item-icon'><TriangleExclamation /></span>
            <span className='row-rs'><h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
            </span>
        </div>
        <div className='panel-row'> 
            <span className='row-item-icon'><Circlecheck /></span>
            <span className='row-rs'><h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
            </span>
        </div>
        <div className='panel-row'> 
            <span className='row-item-icon'><CircleInfo /></span>
            <span className='row-rs'><h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
            </span>
        </div>
        <div className='panel-row'> 
            <span className='row-item-icon'><CircleXmark /></span>
            <span className='row-rs'><h3>GPY Interface Deployed <small>3h ago</small></h3>
            <p>Torquatos nostros? quos dolores et fortibus viris commemorandis eorumque factis non provident, similique.</p>
            </span>
        </div>
              
        <div className='panel-footer'>
        <a className='btn-link'>View all notifications <Arrowrightlong /></a>
        </div>
    </Card>
    );
}

export default PanelWithIcon;