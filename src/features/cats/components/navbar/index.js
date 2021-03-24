import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Navbar.Brand href="/">Cat blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/favorite">Mes favoris</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
