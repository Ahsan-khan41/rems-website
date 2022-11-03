import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {
  return (
    <Navbar expand="lg" className="p-2">
      <Container className="d-flex">
        <Navbar.Brand className="p-0 logo me-auto">
          Rems International
          {/* <img src="assets/img/logo.jpg" alt="" className="logo h-100" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">
              <span class="getstarted scrollto" href="#about">
                Get Started
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
