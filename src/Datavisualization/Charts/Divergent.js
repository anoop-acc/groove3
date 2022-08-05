import React from 'react';
import {Row, Col,} from "react-bootstrap"
import colors3 from "./images/colors3.png" 
function Divergent(props) {
    return (
        <div>
            <h2>Divergent</h2>
            <p>Diverging colors also have numeric meaning. They’re useful when dealing with negative values or ranges that have two extremes with a baseline in the middle. Diverging palettes are a pair of 2 gradations of colors that meet in the center</p>
            <img src={colors3} className="w-100" style={{maxWidth:"900px"}} />
        </div>
    );
}

export default Divergent;