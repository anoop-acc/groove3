import { Container } from 'react-bootstrap';
import React from 'react';
import Header from "../Header/Header"
import Footer from "../Footers/Footer"
import { Row, Col, Card } from "react-bootstrap"

function Layout(props) {
    return (
        <div>
            <Header variant="light" />
            <div className="pagebody">
                <Container fluid>
                    <Row>
                        <Col lg="6" className='py-4'><Card className='card-groove' variant="shadow" style={{ minHeight: "240px" }}>
                            <h3>Title</h3>
                            <p aria-hidden="true">
                                <span class="placeholder w-25 d-block"></span>
                                <span class="placeholder w-75"></span>
                                <span class="placeholder w-100"></span>
                            </p>
                        </Card></Col>
                        <Col lg="6" className='py-4'><Card className='card-groove' variant="shadow" style={{ minHeight: "240px" }}>
                            <h3>Title</h3>
                        </Card></Col>
                    </Row>
                    <Row>
                        <Col lg="6" className='py-4'><Card className='card-groove' variant="shadow" style={{ minHeight: "240px" }}>
                            <h3>Title</h3>
                        </Card></Col>
                        <Col lg="6" className='py-4'><Card className='card-groove' variant="shadow" style={{ minHeight: "240px" }}>
                            <h3>Title</h3>
                        </Card></Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;