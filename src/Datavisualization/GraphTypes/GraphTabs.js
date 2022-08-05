import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comparison from "./Comparison"
import Composition from "./Composition"
import Distribution from "./Distribution"
import Relationship from "./Relationship"
import KPI from "./KPI"
import { Row, Col } from "react-bootstrap"

function FiltersTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");

    return (
        <div>

            <div class="bodyrhs-section-plain pb-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <div className="mb-4 customTabset">
                            <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Comparison</Link>
                            <Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Composition</Link>
                            <Link to="" className={`btn btn-link ${active === "tabC" ? "active" : ""}`} onClick={() => setActive("tabC")}>Distribution</Link>
                            <Link to="" className={`btn btn-link ${active === "tabD" ? "active" : ""}`} onClick={() => setActive("tabD")}>Relationship</Link>
                            <Link to="" className={`btn btn-link ${active === "tabE" ? "active" : ""}`} onClick={() => setActive("tabE")}>KPI</Link>
                        </div>
                    </Col>
                </Row>
            </div>


            <div className="tabContents">
                {active === "tabA" && <div className=""><Comparison /></div>}
                {active === "tabB" && <div className=""><Composition /></div>}
                {active === "tabC" && <div className=""><Distribution /> </div>}
                {active === "tabD" && <div className=""><Relationship /> </div>}
                {active === "tabE" && <div className=""><KPI /></div>}

            </div>


        </div>
    );
}

export default FiltersTabs;