import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='py-1 bg-dark text-light mt-auto'>
      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="mb-1">ExpenseApp</h5>
            <p className="mb-0">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
