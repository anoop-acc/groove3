import React from 'react';
import {Row, Col} from "react-bootstrap"
import colors2 from "./images/colors2.png" 
function Sequential(props) {
    return (
        <div>
        <h2>Sequential</h2>
        <p>Sequential colors have numeric meaning. These are a gradation of colors that go from light to dark.</p>
    <img src={colors2}  className="w-100" style={{maxWidth:"900px"}} /> 
    
    </div>
    );
}

export default Sequential;