import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Information</h4>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col md={6}>
            <h4>Copyright © 2023</h4>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;