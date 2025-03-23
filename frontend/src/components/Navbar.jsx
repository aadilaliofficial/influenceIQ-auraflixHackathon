import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    // AppNavbar.jsx
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">InfluenceIQ</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
