import React, { useState } from "react";
import { Link } from "react-router-dom";
import StandardApproach from "./StandardApproach"
import TypesofFilters from "./TypesofFilters"
import UserScenarios from "./UserScenarios"
import {Row, Col} from "react-bootstrap"

function FiltersTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");

    return (
<div>

<div class="bodyrhs-section-plain py-0">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
 <div className="mb-4 customTabset"> 
 <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Standard Approach</Link>
<Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Types of Filters</Link>
<Link to="" className={`btn btn-link ${active === "tabC" ? "active" : ""}`} onClick={() => setActive("tabC")}>User Scenarios</Link>
</div>
 </Col>
 </Row>
 </div>
 

<div className="tabContents">
{active === "tabA" && <div className=""><StandardApproach /></div>}
{active === "tabB" && <div className=""><TypesofFilters /> </div>}
{active === "tabC" && <div className=""><UserScenarios /> </div>}
 
</div>


</div>
    );
}

export default FiltersTabs;