import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sequential from "./Sequential"
import Categorical from "./Categorical"
import Divergent from "./Divergent"

function ChartColorPalettesTabs(props) {

    const [active, setActive] = useState("tabA");
    const isActive = (key) => (active === key ? "active" : "");

    return (
        <div>
<div className="mb-4 customTabset"> 
<Link to="" className={`btn btn-link ${active === "tabA" ? "active" : ""}`} onClick={() => setActive("tabA")}>Categorical / Qualitative</Link>
<Link to="" className={`btn btn-link ${active === "tabB" ? "active" : ""}`} onClick={() => setActive("tabB")}>Sequential</Link>
<Link to="" className={`btn btn-link ${active === "tabC" ? "active" : ""}`} onClick={() => setActive("tabC")}>Divergent</Link>
</div>

<div className="tabContents">
{active === "tabA" && <div className=""><Categorical /></div>}
{active === "tabB" && <div className=""><Sequential/> </div>}
{active === "tabC" && <div className=""><Divergent /></div>}
</div>

</div>
    );
}

export default ChartColorPalettesTabs;