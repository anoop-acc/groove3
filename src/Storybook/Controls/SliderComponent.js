import React from 'react';
import {Slider} from "antd"
function SliderComponent(props) {

    
    return (
       

  <Slider defaultValue={props.slidervalue} className={`slider-groove ${props.variant}`}  />  

       
        
    );
}

export default SliderComponent;