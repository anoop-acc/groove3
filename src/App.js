import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Designsystemwelcome from "./Designsystemwelcome"
import OpsiToolsLanding from "./OpsiToolsLanding"
import CoreuigrooveLanding from "./CoreuigrooveLanding"
import Overview from "./Foundations/Overview"
import Navigations from "./Navigations/Navigations"
import UiComponents from "./Uicomponents/UiComponents"
import Datavisualization from "./Datavisualization/Datavisualization"
import LibraryLanding from "./LibraryLanding"
import Storybook from "./Storybook"
import FootersDemo from "./FootersDemo"
import HeadersDemo from "./HeadersDemo"
import Layouts from "./LayoutsDemo"
import NavsDemo from "./NavsDemo"
 
import MediaAndIllustration from "./MediaAndIllustration/MediaAndIllustration"
 

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>       
        <Route path="/" element={<Designsystemwelcome />}/>           
          <Route path="OpsiToolsLanding" element={<OpsiToolsLanding />} />    
          <Route path="LibraryLanding" element={<LibraryLanding />} />   

          <Route path="Storybook" element={<Storybook />} />   
          <Route path="Footer" element={<FootersDemo />} />  
          <Route path="Header" element={<HeadersDemo />} />  
          <Route path="Layouts/light" element={<Layouts />} />  
          <Route path="Navs" element={<NavsDemo />} />  
          <Route path="CoreuigrooveLanding" element={<CoreuigrooveLanding />}>          
            {/* Subpages */}           
                <Route path="Overview" element={<Overview />} /> 
                <Route path="Navigations" element={<Navigations />} />
                <Route path="UiComponents" element={<UiComponents />} />
                <Route path="Datavisualization" element={<Datavisualization/>} />
                {/* <Route path="Datavisualizations" element={<Datavisualizations />} /> */}
                <Route path="MediaAndIllustration" element={<MediaAndIllustration />} />
          </Route>        
      </Routes>
    </Router>


    </div>
  );
}

export default App;


