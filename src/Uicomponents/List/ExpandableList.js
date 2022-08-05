import React from 'react';
import Accordions from "./AccordionList"
import AccordionListComplex from "./AccordionListComplex"

//Import Component Sample Code
import { CodeData } from "../../CodeData";
const [codeItem] = CodeData;

function ExpandableList(props) {

    const { codedivActive } = props;

    return (
        <div>
            <p>Use for displaying or hiding details of the expandable list (Accordion component) to deliver large amounts of content in a small space through progressive disclosure. The header title gives the user a high-level overview of the content allowing the user to decide which sections to read.</p>

            <p>Accordions can make information processing and discovery more effective. However, it does hide content from users and it's important to account for a user not noticing or reading all of the included content list items by expanding or collapsing it vertically, to communicate it can expand the suggested way is having an actionable arrow on the right action place.</p>
        <h4>Simple Expandable List Item</h4>
        <Accordions />
        
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.expandablelist}
</pre>
</div>
        <h4 className='mt-5'>Complex Expanded List Sample</h4>
        <AccordionListComplex />
        
<div   className={`codeview my-4 ${codedivActive ? "hide" : "show"}`}>
<pre>
{codeItem.expandablelistcomplex}
</pre>
</div>
        </div>
    );
}

export default ExpandableList;