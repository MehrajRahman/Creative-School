import React from "react";
import logo from "../../images/footer.png"
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import './Appbar.css'
function Appbar(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container >
          <Navbar.Brand href="#home" ><img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="ms-auto change-nav" >
              <Nav.Link className="change-nav-item" href="#features">About Us</Nav.Link>
              <Nav.Link className="change-nav-item" href="#pricing">Our Stories</Nav.Link>
              
            
              <Nav.Link className=" change-nav-item "  href="#deets">News & Events</Nav.Link>
              <Nav.Link className=" change-nav-item donate-button text-white ps-2 pe-2" eventKey={2} href="#memes">
              Donate Today
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;
