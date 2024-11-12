import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWallet, FaChartLine } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-white shadow-sm"
        style={{
          padding: '1rem',
        }}
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand text-dark fs-3" to="/">
              <h1
                className="fs-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '0.1rem',
                }}
              >
                ExpenseApp
              </h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Link
                className="nav-link text-dark"
                to="v1"
                style={{
                  padding: '0.5rem 1rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaWallet className="me-2" /> Expense-1
              </Link>
              <Link
                className="nav-link text-dark"
                to="v2"
                style={{
                  padding: '0.5rem 1rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaChartLine className="me-2" /> Expense-2
              </Link>
            </Nav>
            <Nav className="ms-auto">
              
              <Link
                className="btn btn-dark text-white ms-2"
                to="/signup"
                style={{
                  borderRadius: '50px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: '500',
                }}
              >
               natinael.96
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
