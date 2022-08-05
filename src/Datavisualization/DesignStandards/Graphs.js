import React from 'react';
import { Row, Col } from "react-bootstrap"

import graph1 from "./images/graphs/graph1.png"
import potracking from "./images/graphs/potrackinggraph.png"
import potrackingline from "./images/graphs/chart3.png"
import ripegraph from "./images/graphs/ripegraph.png"
import avoidrandomness from "./images/graphs/avoidrandomness.png"
import colors from "./images/graphs/colors.png"

function Graphs(props) {
    return (
        <div>
            <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h2>Use adaptive y-axis scale for charts</h2>
                        <p>Truncation leads to misrepresentation. On the example below, looking at the chart on the right, you can quickly conclude that value B is more than 3 times greater than D when in reality the difference is far more marginal. Starting at zero baselines ensures that users get a much more accurate representation of data.</p>
                        <p><img src={graph1}  className="w-100" style={{maxWidth:"1000px"}} /></p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-plain">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <p>But, in the line chart, it’s important to adapt the scale based on the data set for a given period and keep the line occupying two-thirds of the y-axis range</p>
                        <p><img src={potracking} className="w-100" style={{maxWidth:"1000px"}}  />  </p>
                        <p>When your data is relatively similar on month to month with moving average you can use smooth curves in the line chart.</p>
                        <p> <img src={potrackingline} className="w-100" style={{maxWidth:"615px"}}  /> </p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-gray mb-4 ">
                <Row className="  container-fluid">
                    <Col md="3" className='p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start '>
                        <h2>Pie Chart Limitations</h2>
                        <ul className='ul-dash'>
                            <li>Don’t include more than 5-7 slices, keep it simple.</li>
                            <li>You can group the extra smallest segments into the “Other” slice.</li>
                            <li>Put the largest slice at the 12 o’clock position and put the next slices in descending order clockwise.</li>
                            <li>Putting the values on top of slices may cause multiple problems, from readability issues to challenges with thin slices. Instead,
                                add black labels with clear links to each segment.</li>
                            <li>Limit the character in the label.</li>
                            <li>Labelling directly on the chart is super helpful for all viewers. Consulting the legend requires time and mental energy to link
                                the values and corresponding segments</li>
                        </ul>
                        <p> <img src={ripegraph}  className="w-100" style={{maxWidth:"1000px"}} /> </p>
                    </Col>
                </Row>
            </div>
            <div class="bodyrhs-section-plain">            
 <Row className="container-fluid  mx-auto p-0"> 
 <Col md="3" className=' p-0 lhs-emptyspace'></Col>
 <Col lg="9" className='p-0 ps-lg-5 text-start'><h2>Avoid randomness</h2>
<ul className='ul-dash'> 
<li>Place the largest values on top (for horizontal bar charts) or left (for vertical bar charts) to ensure the most important values take the most prominent space
 </li>
    <li>Use a horizontal bar chart instead of rotating labels</li>
</ul>
<p><img src={avoidrandomness}  className="w-100" style={{maxWidth:"1000px"}} /> </p>
<h2>Design for Accessibility</h2>
<p>According to the National Eye Institute, about 1 in 12 humans are color blind, your charts are only successful if they are accessible to a broad audience.
</p>
<p>Examples of the color testing:</p>
<p>  <img src={colors} className="w-100" style={{maxWidth:"1000px"}}  /> </p>
 </Col>
 </Row>
 </div>
        </div>
    );
}

export default Graphs;