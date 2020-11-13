import React from "react";

import "./navbar.css";

import { Nav, Navbar } from "react-bootstrap";

function NavbarHome() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="bg__navbar">
        {/* <Navbar.Brand href="">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link
              className="nav__text"
              href=""
              style={{ textDecoration: "line-through" }}
            >
              Home
            </Nav.Link>
            <Nav.Link className="nav__text" href="">
              About
            </Nav.Link>
            <Nav.Link className="nav__text" href="">
              Services
            </Nav.Link>
            <Nav.Link className="nav__text" href="">
              Skills
            </Nav.Link>
            <Nav.Link className="nav__text" href="">
              Projects
            </Nav.Link>
            <Nav.Link className="nav__text" href="">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarHome;
