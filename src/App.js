
import React from 'react';
import './App.css';
import { HeaderApp } from './components/header/header_app';
import { HomeApp } from './components/body/home_app';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Api ecommerce sobre productos de belleza desarrollado en react.
 * se procura realizar el proyecto en componentes y 
 * se realiza una llamada a una api de productos de belleza.
 * el proyecto se encuentra en estados iniciales de desarrollo.
 * @returns 
 */

function App() {

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
