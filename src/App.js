
import React from 'react';
import './App.css';
import { HeaderApp } from './components/header/header_app';
import { HomeApp } from './components/body/home_app';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  // return (
  //   <div>
  //     <HeaderApp />
  //     <HomeApp />

  //   </div>
  // );
  return (
    <Container fluid>
      <Row className="header-row">
        <Col xs={12}>
          <HeaderApp />
        </Col>
      </Row>
      <Row className="home-row">
        <Col xs={12} className="mx-auto">
          <HomeApp />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
