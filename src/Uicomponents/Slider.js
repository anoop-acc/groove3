import * as React from 'react'; 
import Slider from '@mui/material/Slider';

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A100FF" 
      
    },
    secondary: {
      main: "#F00"
    
    },
    blue: {
      main: "#008EFF"
    },
    warning: {
      main: "#008EFF"
    
    },
    danger: {
      main: "#008EFF"
    
    },
    light: {
      main: "#008EFF"
    
    },
    dark: {
      main: "#008EFF"
    }
  }
});
 

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider(props) {
  return (
    <ThemeProvider theme={theme}>
      <Slider
        aria-label="Temperature"
        defaultValue={props.defaultValue} 
        getAriaValueText={valuetext}
        color={props.varient}        
        className="slider-groove"
      />
    </ThemeProvider>
    
  );
}