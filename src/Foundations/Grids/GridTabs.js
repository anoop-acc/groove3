import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alignments from "./Alignments"
import BestPractice from "./BestPractice"
 
import { Row, Col } from "react-bootstrap"

function ListTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");

    return (
        
<>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0 list-page">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <div className="mb-4 customTabset">
                            <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Alignments</Link>
                            <Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Best Practices</Link>
                        </div>
                       
                    </Col>
                </Row>
            </div>
            <div className="tabContents">
                            {active === "tabA" && <div className=""><Alignments /></div>}
                            {active === "tabB" && <div className=""><BestPractice /> </div>}                       
                        </div>

</>


 
    );
}

export default ListTabs;