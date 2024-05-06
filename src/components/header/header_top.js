
import * as iconBrand from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const HeaderTop = () => {
    return (
        <Navbar className="bg__navbarTop height__navbarTop">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={iconBrand.faFacebook} />
                        </Nav.Link>
                        <Nav.Link href="#features">
                            <FontAwesomeIcon icon={iconBrand.faSquareInstagram} />
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Store List</Nav.Link>
                        <Nav className='divider'></Nav>
                        <Nav.Link className="">
                            <FontAwesomeIcon icon={iconBrand.faWhatsapp} />
                            <span>
                                <small>Whatsapp: 313 28XXXX</small>
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
