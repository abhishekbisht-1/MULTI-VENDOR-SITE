import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {

 return(
    <Navbar expand="lg" className="navbar-light navbar-expand large bg-white py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            F COLLECTION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
         
            <Nav
              className="ms my-2 my-lg-0 mx-auto"
              style={{ maxHeight: "100px"  }}
              navbarScroll
            >
              
              <Nav.Link href="#action1"  className="ms-2">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="ms-2">
                Product
              </Nav.Link>
             
              <Nav.Link href="#action2" className="ms-2">
               About
              </Nav.Link>
            </Nav>
          <button className="btn "><a href="#"className="btn btn-outline-dark btn-sm me-1"> Login</a></button>
          <button className="btn  "><a href="#"className="btn btn-outline-dark btn-sm me-1">Signup</a></button>
          <butto className="btn "><a href="#"className="btn btn-outline-dark btn-sm me-1">Cart
</a></butto>
        </Container>
      </Navbar>)
}
export default Header;