import React, { useState } from "react";
import { Link } from "react-router-dom";
import StandardList from "./StandardList"
import ExpandableList from "./ExpandableList"
import ListItemVariations from "./ListItemVariations"
import { Row, Col } from "react-bootstrap"

function ListTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");
    const {codedivActive} = props;

    return (
        <div>

            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0 list-page">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <div className="mb-4 customTabset">
                            <Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Standard List Items</Link>
                            <Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Expandable List Items</Link>
                            <Link to="" className={`btn btn-link ${active === "tabC" ? "active" : ""}`} onClick={() => setActive("tabC")}>List Item Variations</Link>
                        </div>
                        <div className="tabContents">
                            {active === "tabA" && <div ><StandardList codedivActive={codedivActive} /></div>}
                            {active === "tabB" && <div ><ExpandableList codedivActive={codedivActive} /> </div>}
                            {active === "tabC" && <div ><ListItemVariations codedivActive={codedivActive}/> </div>}

                        </div>
                    </Col>
                </Row>
            </div>





        </div>
    );
}

export default ListTabs;