/* eslint-disable no-unused-vars */
import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const NavBars = () => {
  return (
    <>
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  )
}

export default NavBars