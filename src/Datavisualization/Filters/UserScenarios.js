import React from 'react';
import { Row, Col } from "react-bootstrap"
import us1 from "./images/users/us1.png"
import us2 from "./images/users/us2.png"
import us3 from "./images/users/us3.png"
import us4 from "./images/users/us4.png"

function UserScenarios(props) {
    return (
        <div>
            <div class="bodyrhs-section-plain pt-0">
                <Row className="container-fluid  mx-auto p-0">
                    <Col md="3" className=' p-0 lhs-emptyspace'></Col>
                    <Col lg="9" className='p-0 ps-lg-5 text-start'>
                        <h3>1. Order filters by importance, not alphabetically</h3>
                        <p>The organisation of filter categories and values is critical to ensuring that users can easily discover their desired filters. These elements need to be ordered according to importance. The filter categories placed higher in the list will receive more attention. As a good rule of thumb, consider placing the most general, high-level filter categories at the top of the list, and the more specific ones towards the bottom. Organising filter categories this way can be particularly helpful in managing potentially confusing or obscure filters for complex content.</p>
                        <p><img  className='componentImg'  src={us1}/></p>
                    <h3>2. Choose Vertical over Horizontal Filter Approach </h3>
                    <p>The placement of a consistent filter section across the dashboard will always matter the most when you’re building an asset. The vertical approach is always recommended for filter sections which help to accommodate a large number of filters compared to the Horizontal approach but try not to exceed more than 8 filters.</p>
                    <p><img  className='componentImg'  src={us2}/></p>
                    <h3>3. Global Filters</h3>
                    <p>To enhance the user experience, the use of a global filter makes it possible to sort the data at a high level and this applies to all sections of the dashboard. An overall filter is placed on the upper part of the filter with a dedicated space. Based upon asset requirements, we can design the overall filter.</p>
                    <p><img  className='componentImg'  src={us3}/></p>
                    <h3>4. Vertical Scroll in the Filter Section</h3>
                    <p>To enhance the user experience, the use of a global filter makes it possible to sort the data at a high level, this applies to all sections of the dashboard. An overall filter is placed on the upper part of the filter with a dedicated space. Based on asset requirements, we can design the overall filter.</p>
                    <p><img  className='componentImg'  src={us4}/></p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default UserScenarios;