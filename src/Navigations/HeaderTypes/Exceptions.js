import React from 'react';
import filterplacement from "../images/Navigations/filterplacement.png"
import navplacement from "../images/Navigations/navplacement.png"
import morenumberofnavigation from "../images/Navigations/morenumberofnavigation.png"
import {NavLink} from "react-router-dom"

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function Exceptions(props) {
    const { codedivActive } = props;
    return (
        <div>
            <h3>Placement of Filter in Header </h3>
            <p>Filter should ideally not be placed in the header, however,there can be exceptions for global filters like language selection.</p>
            <img src={filterplacement} className="w-100" style={{ maxWidth: "1024px" }} />
            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
            <NavLink className="demo" to="/Header" target={"_blank"} >Demo</NavLink>
                <pre>
                   {codeItem.Headerwithfilter}
                </pre>
                <table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants </td>
<td className="p-2 border ">light, dark 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">header-groove</td>
</tr>
</table>
            </div>
            <h3 className='my-3'>Placement of Navigation in Header </h3>
            <p>Navigation and header should ideally be separate, however, some brand guidelines require this arrangement. This should be followed only if exclusively specified.</p>
            <img src={navplacement} className="w-100" style={{ maxWidth: "1024px" }} />



            <h3 className='mt-4'>More number of navigation items in the Header</h3>
            <p>There may be too many menu items to display on smaller viewports. In these cases, the overflowing items can be placed under a dropdown menu as shown.</p>
            <img src={morenumberofnavigation} className="w-100" style={{ maxWidth: "1024px" }} />
        </div>
    );
}

export default Exceptions;