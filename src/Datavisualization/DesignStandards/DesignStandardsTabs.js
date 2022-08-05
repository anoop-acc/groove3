import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nomenclature from "./Nomenclature"
import Graphs from "./Graphs"
import Exceptions from "./Exceptions"
import StandardApproach from "./StandardApproach"


import {Row, Col} from "react-bootstrap"

function DesignStandardsTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");

    return (
<div>

<div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'>
 <div className="mb-4 customTabset"> 
 <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Standard Approach</Link>
<Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Exceptions</Link>
<Link to="" className={`btn btn-link ${active === "tabC" ? "active" : ""}`} onClick={() => setActive("tabC")}>Nomenclature</Link>
<Link to="" className={`btn btn-link ${active === "tabD" ? "active" : ""}`} onClick={() => setActive("tabD")}>Graphs</Link>
</div>
 </Col>
 </Row>
 </div>
 

<div className="tabContents">
{active === "tabA" && <div className=""><StandardApproach /></div>}
{active === "tabB" && <div className=""><Exceptions /></div>}
{active === "tabC" && <div className=""><Nomenclature /></div>}
{active === "tabD" && <div className=""><Graphs /> </div>}
 
</div>


</div>
    );
}

export default DesignStandardsTabs;