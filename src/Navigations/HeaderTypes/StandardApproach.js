import React from "react";
import HeaderNavLight from "../images/Navigations/Nav-Light.png"
import HeaderNavDark from "../images/Navigations/Nav-Dark.png"
import Anatomayofbanner from "../images/Navigations/anatomayofbanner.png"
import headerspacing from "../images/Navigations/headerspacing.png"
import {Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom";

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function StandardApproach(props) {
 
    const { codedivActive } = props;

    return (
        <div>
            <h3 className='mb-3'>Recommended Primary Header - Light mode </h3>
            <img className='w-100 ' src={HeaderNavLight} />    
            <h3 className='my-3'>Alternate Primary Header - Dark mode </h3>
            <img className='w-100' src={HeaderNavDark} />
            <div className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
                <NavLink className="demo" to="/Header" target={"_blank"} >Demo</NavLink>
                        <pre>
                        {codeItem.headerbasic}

                        </pre>
<table className='codetable border mt-3'>
<tr>
<td className="p-2 border w-25">Variants </td>
<td className="p-2 border ">light, dark 
</td>
</tr>
<tr>
<td className="p-2 border w-25">Custom Class</td>
<td className="p-2 border ">header-groove, header-groove-hb-menu</td>
</tr>
</table>
</div>
            <h3 className='mt-4'>Anatomy of a banner</h3>
                    <p>The top banner component is a persistent UI element that contains branding, primary navigation links, and utilities for the product.</p>
                    <img className='w-100' src={Anatomayofbanner} />
                    <Row className="mt-4">
                        <Col md="6">
                            <h3>1. Hamburger Menu</h3>
                            <p>An optional component, the hamburger menu should be used only when there are too many navigation links to display in the standard banner. The hamburger configuration may also be used when responsive design is required for smaller browser/device viewports. Triggering the hamburger menu will open the drawer or mega menu navigation component.
                            </p>

                            <h3>3. Product Name</h3>
                            <p>The product name should be short and descriptive. A best practice is no more than 2-3 words. Like the icon, clicking the product name will always direct the user to the product’s home or landing page.</p>

                            <h3>5. Utilities</h3>
                            <p>Utilities are represented visually standard icons available in the Groove iconography library. Utilities are used for universal, system-level functions such as profile, search, notifications, and similar functions. While utilities may vary from product to product, it is best to maintain consistency where possible.</p>

                        </Col>




                        <Col md="6">
                            <h3>2. Product/Capability Icon</h3>
                            <p>The product/capability icon is used to visually represent the product or capability group. Clicking the icon will always direct the user to the product’s home or landing page.</p>
                            <h3>4. Navigation Links</h3>
                            <p>
                                Direct and drop-down links may be used in the top nav banner. Direct links are simple links that navigate the user to another page or selection of the product. Drop-down links include contextual sub-menus. Sub-menus open on click and are closed by either selecting an item in the menu, clicking outside the menu area, or clicking on the menu label. Drop-down labels only open the submenu; they cannot link to another page in the product.
                            </p>
                            <h3>6. User Profile</h3>
                            <p>The user profile menu icon should be displayed consistently across all applications. The profile may contain an image. If no image is used, the user initials will be used. The user profile menu opens on click and closed by either selecting an item in the menu, clicking outside the menu area, or clicking on the icon.</p>

                        </Col>
                    </Row>
                    <h3>Header Spacing</h3>
                    <p>Consistent spacing creates a visual balance that makes the user interface easier to scan. Apply consistent spacing to improve the quality of the UI. All spacing for components and typography is done in increments of 4 pixels. This forms the basic unit of measurement for spacing.</p>
<img src={headerspacing} className='w-100'  />

 


        </div>
    );
}

export default StandardApproach;