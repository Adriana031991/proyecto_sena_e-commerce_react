import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSolid from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, NavLink, Row } from 'react-bootstrap';

export const HeaderContent = () => {
    return (

        // <Navbar expand="lg" className="bg-warning d-flex ">
        //     <Container >
        //         <Row className='justify-content-around align-items-center ' >
        //             <Col xs={6} md={3} lg={2} >
        //                 <Navbar.Brand href="#" className='fs-2'>ESV COSMETICS</Navbar.Brand>

        //             </Col>

        //             <Col xs={6} md={3} lg={2} className="text-end">
        //                 <Nav >
        //                     <button className='border border-0 bg-transparent ' ><FontAwesomeIcon icon={iconSolid.faBars} className='barIcon' /></button>
        //                 </Nav>
        //             </Col>
        //             <Col xs={12} md={6} lg={4}  >
        //                 <Nav >
        //                     <Form className="d-flex ">
        //                         <Form.Control
        //                             type="search"
        //                             placeholder="Search"
        //                             className="me-2 "
        //                             aria-label="Search"
        //                         />
        //                         <Button variant="outline-success">Search</Button>
        //                     </Form>
        //                 </Nav>
        //             </Col>

        //             <Col xs={6} md={3} lg={2} className="d-flex py-2">

        //                 <Nav.Link href="#"><FontAwesomeIcon icon={iconSolid.faHeart} className='barIcon' /></Nav.Link>
        //                 <Nav.Link href="#"><FontAwesomeIcon icon={iconSolid.faShoppingBag} className='barIcon' /></Nav.Link>
        //                 <Nav.Link href="#"><FontAwesomeIcon icon={iconSolid.faUser} className='barIcon' /></Nav.Link>
        //             </Col>




        //         </Row>
        //     </Container>
        // </Navbar>

        <Navbar expand="lg" className="bg-warning d-flex flex-sm-row">
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col sm={4} md={3} lg={2} className="flex-grow-1">
                        <Navbar.Brand href="#" className="fs-2">ESV COSMETICS</Navbar.Brand>
                    </Col>

                    <Col sm={4} md={3} lg={2} className="text-end">
                        <Nav>
                            <Button variant="link" className="border-0 bg-transparent text-black">
                                <FontAwesomeIcon icon={iconSolid.faBars} className='barIcon' />
                            </Button>
                        </Nav>
                    </Col>

                    <Col sm={8} md={6} lg={4}>
                        <Nav>
                            <Form as={Col} lg="12" className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2 w-100 w-lg-500" aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                    </Col>

                    <Col sm={4} md={3} lg={2} className='d-flex py-2'>

                        <NavLink href="#">
                            <FontAwesomeIcon icon={iconSolid.faHeart} className="barIcon" />
                        </NavLink>
                        <NavLink href="#">
                            <FontAwesomeIcon icon={iconSolid.faShoppingBag} className="barIcon" />
                        </NavLink>
                        <NavLink href="#">
                            <FontAwesomeIcon icon={iconSolid.faUser} className="barIcon" />
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
